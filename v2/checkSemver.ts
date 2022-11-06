#!/usr/bin/env -S ts-node --esm

/*
 * Copyright (C) 2022 UBports Foundation <info@ubports.com>
 * Copyright (C) 2022 Johannah Sprinz <hannah@ubports.com>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import fs from "fs/promises";
import path from "path";
import YAML from "yaml";
import axios from "axios";
import semver from "semver";

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
