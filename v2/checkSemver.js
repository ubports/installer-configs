#!/usr/bin/env node

const fs = require("fs/promises");
const path = require("path");
const YAML = require("yaml");
const axios = require("axios");
const semver = require("semver");

Promise.all([
  axios
    .get(
      "https://api.github.com/repos/ubports/ubports-installer/releases/latest"
    )
    .then(({ data }) => data.tag_name),
  fs
    .readdir("v2/devices")
    .then(files =>
      Promise.all(
        files.map(f =>
          fs
            .readFile(path.join("v2", "devices", f))
            .then(cfg => YAML.parse(cfg.toString()))
            .then(({ codename, operating_systems }) =>
              operating_systems
                .map(({ compatible_installer, name }) => ({
                  codename,
                  name,
                  compatible_installer
                }))
                .filter(({ compatible_installer }) => compatible_installer)
            )
        )
      )
    )
    .then(devices => devices.flat())
])
  .then(([latest_installer, devices]) =>
    Promise.all(
      devices.map(device =>
        semver.satisfies(latest_installer, device.compatible_installer, {
          includePrerelease: true
        })
          ? Promise.resolve()
          : Promise.reject(
              new Error(
                `${device.codename}: ${device.name}: compatible_installer ${device.compatible_installer} does not satisfy latest installer version ${latest_installer}`
              )
            )
      )
    )
  )
  .catch(e => {
    console.error("Failed to validate semver:", e.message);
    process.exit(-1);
  });
