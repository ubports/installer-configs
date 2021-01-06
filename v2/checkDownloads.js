#!/usr/bin/env node

const fs = require("fs/promises");
const path = require("path");
const YAML = require("yaml");
const { download } = require("progressive-downloader");

const crypto = require("crypto");

const md5 = str => crypto.createHash("md5").update(str).digest("hex");

const check_download = ({ files }) =>
  files.map(f => ({
    ...f,
    path: path.join(__dirname, "..", "downloads", md5(f.url))
  }));

const check_action = action =>
  action["core:download"]
    ? check_download(action["core:download"])
    : action["core:group"]
    ? action["core:group"].map(check_step)
    : null;

const check_step = ({ actions, fallback }) =>
  [
    actions?.map(check_action).flat(),
    fallback?.map(check_action).flat()
  ].flat();

fs.mkdir(path.join("downloads"), { recursive: true })
  .then(() => fs.readdir("v2/devices"))
  .then(files =>
    Promise.all(
      files.map(f =>
        fs
          .readFile(path.join("v2", "devices", f))
          .then(cfg => YAML.parse(cfg.toString()))
          .then(({ operating_systems }) =>
            operating_systems.map(({ steps }) => steps.map(check_step).flat())
          )
          .then(files => files.flat().filter(f => f))
      )
    ).then(f =>
      download(
        f.flat(),
        (progress, speed) =>
          console.log(`download ${progress * 100}% complete at ${speed} MB/s`),
        (current, total) =>
          console.log(`downloading file ${current} of ${total}`),
        activity => console.log(activity)
      )
    )
  );
