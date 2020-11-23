#!/usr/bin/env node

const fs = require("fs/promises");
const path = require("path");
const YAML = require("json-to-pretty-yaml");

function readJSON(file) {
  return fs.readFile(file).then(JSON.parse);
}

function writeYAML(file, data) {
  return fs.writeFile(file, YAML.stringify(data));
}

const aliases = readJSON("aliases.json");
async function getAliases(codename) {
  return Object.entries(await aliases)
    .map(([variable, value]) => (value === codename ? variable : null))
    .filter((a) => a);
}

fs.mkdir(path.join("v2", "data", "devices"), { recursive: true })
  .then(() => fs.readdir("v1"))
  .then((configs) =>
    Promise.all(
      configs
        .filter((c) => !c.startsWith("_"))
        .map((configPath) =>
          readJSON(path.join("v1", configPath))
            .then(async (config) => ({
              name: config.name,
              codename: config.codename,
              aliases: await getAliases(config.codename),
              $schema:
                "https://raw.githubusercontent.com/ubports/installer-configs/master/v2/schema/device.schema.json",
              ...config,
            }))
            .then((config) =>
              writeYAML(
                path.join(
                  "v2",
                  "data",
                  "devices",
                  configPath.replace(".json", ".yml")
                ),
                config
              ).then(() => ({
                name: config.name,
                codename: config.codename,
                aliases: config.aliases,
              }))
            )
        )
    )
  )
  .then((configs) =>
    configs.reduce(
      (acc, curr) => {
        acc.index[curr.codename] = curr.name;
        curr.aliases.forEach((alias) => {
          if (acc.aliases[alias]) {
            acc.aliases[alias].push(curr.codename);
          } else {
            acc.aliases[alias] = [curr.codename];
          }
        });
        return acc;
      },
      {
        index: {},
        aliases: {},
      }
    )
  )
  .then(({ index, aliases }) =>
    Promise.all([
      writeYAML(path.join("v2", "data", "index.yml"), index),
      writeYAML(path.join("v2", "data", "aliases.yml"), aliases),
    ])
  );
