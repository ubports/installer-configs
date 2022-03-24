#!/usr/bin/env node

const fs = require("fs/promises");
const path = require("path");
const YAML = require("yaml");

function writeJSON(file, data) {
  return fs.writeFile(file, JSON.stringify(data));
}

fs.mkdir(path.join("build", "v2", "devices"), { recursive: true })
  .then(() => fs.readdir("v2/devices"))
  .then(files =>
    Promise.all(
      files.map(f =>
        fs
          .readFile(path.join("v2", "devices", f))
          .then(cfg => YAML.parse(cfg.toString()))
          .then(cfg =>
            writeJSON(
              path.join("build", "v2", "devices", `${cfg.codename}.json`),
              process.env.GITHUB_SHA
                ? { sha: process.env.GITHUB_SHA, ...cfg }
                : cfg
            ).then(() => cfg)
          )
      )
    )
  )
  .then(configs =>
    configs.reduce(
      (acc, curr) => {
        acc.index.push({
          name: curr.name,
          codename: curr.codename,
          formfactor: curr.formfactor,
          operating_systems: curr.operating_systems.map(os => os.name)
        });
        (curr.aliases || []).forEach(alias => {
          if (acc.aliases[alias]) {
            acc.aliases[alias].push(curr.codename);
          } else {
            acc.aliases[alias] = [curr.codename];
          }
        });
        return acc;
      },
      {
        index: [],
        aliases: {}
      }
    )
  )
  .then(({ index, aliases }) => ({
    index: index.sort((a, b) =>
      a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
    ),
    aliases
  }))
  .then(({ index, aliases }) =>
    Promise.all([
      writeJSON(path.join("build", "v2", "index.json"), index),
      writeJSON(path.join("build", "v2", "aliases.json"), aliases)
    ])
  )
  .catch(err => {
    console.error(`Failed to build configs: ${err}`);
    process.exit(-1);
  });
