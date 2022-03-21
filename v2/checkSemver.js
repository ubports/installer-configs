#!/usr/bin/env node

const fs = require("fs/promises");
const path = require("path");
const YAML = require("yaml");
const axios = require("axios");
const semver = require("semver");

console.log(
  "This script will check whether the latest installer satisfies all configs. Note: This is not a requirement to merge configs, just a handy helper to track open work items."
);
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
    devices.forEach(device => {
      if (
        !semver.satisfies(latest_installer, device.compatible_installer, {
          includePrerelease: true
        })
      ) {
        throw new Error(
          `${device.codename}: ${device.name}: compatible_installer ${device.compatible_installer} does not satisfy latest installer version ${latest_installer}`
        );
      }
    })
  )
  .then(() => console.log("all actions compatible with latest installer"))
  .catch(e => {
    console.error("Failed to validate semver:", e.message);
    process.exit(-1);
  });
