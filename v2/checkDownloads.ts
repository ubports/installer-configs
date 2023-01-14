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
import crypto from "crypto";
import path from "path";
import YAML from "yaml";
import { download } from "progressive-downloader";

const md5 = str => crypto.createHash("md5").update(str).digest("hex");

const check_download = ({ files }) =>
  files.map(f => ({
    ...f,
    path: path.resolve("downloads", md5(f.url))
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
          console.log(`downloading file ${current} of ${total}`)
      )
    )
  );
