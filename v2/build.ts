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
import { compile } from "json-schema-to-typescript";
import { schemas } from "./schemas.js";

/** resolves build base dir if it exists */
const buildDir = Promise.all([
  fs
    .mkdir("build/v2/devices", { recursive: true })
    .then(() => fs.mkdir("build/v2/schema", { recursive: true })),
  fs
    .mkdir("lib/schema", { recursive: true })
    .then(() => fs.cp("v2/schema", "lib/schema", { recursive: true }))
]).then(() => "build/v2");

const buildTypes = async () => {
  const types = compile(schemas[0], "UBportsInstallerConfig", {
    cwd: "v2/schema"
  });
  await buildDir;
  await fs.writeFile(path.join("lib/schema.d.ts"), await types);
  console.log("types built");
};

const buildSchema = async () => {
  await Promise.all(
    schemas.map(async file => {
      file.$id = file.$id.replace(".yml", ".json");
      return fs.writeFile(
        path.join(await buildDir, "schema", file.$id),
        JSON.stringify(file)
      );
    })
  );
  console.log("schema built");
};

const prepareJson = obj =>
  JSON.stringify(
    process.env.GITHUB_SHA ? { sha: process.env.GITHUB_SHA, ...obj } : obj
  );

const buildConfigs = async cfg => {
  await fs.writeFile(
    path.join(await buildDir, "devices", `${cfg.codename}.json`),
    prepareJson(cfg)
  );
  return cfg;
};

const buildIndex = async configs => {
  const { index, aliases } = configs.reduce(
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
  );

  return Promise.all([
    fs.writeFile(
      path.join("build", "v2", "index.json"),
      JSON.stringify(
        index.sort((a, b) =>
          a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
        )
      )
    ),
    fs.writeFile(
      path.join("build", "v2", "aliases.json"),
      JSON.stringify(aliases)
    )
  ]);
};

const buildData = async () => {
  const files = await fs.readdir("v2/devices");
  await Promise.all(
    files.map(f =>
      fs
        .readFile(path.join("v2", "devices", f), "utf-8")
        .then(cfg => YAML.parse(cfg))
        .then(cfg => buildConfigs(cfg))
    )
  ).then(buildIndex);
  console.log("configs build");
};

// only build if called from cli
if (process.argv[1].split(path.sep).pop() === "build.ts") {
  console.log("building...");
  Promise.all([buildTypes(), buildSchema(), buildData()])
    .then(() => console.log("success!"))
    .catch(error => {
      console.error(`failed to build: ${error}`);
      process.exit(-1);
    });
}
