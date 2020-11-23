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

function transformStep(step) {
  if (step.fallback_user_action) {
    step.fallback = [
      {
        type: "user_action",
        action: step.fallback_user_action,
      },
    ];
    delete step.fallback_user_action;
  }
  return step;
}

function transformOSs(os) {
  return {
    steps: os.steps.map(transformStep),
    ...os,
  };
}

function getFormfactor(codename) {
  switch (codename) {
    case "cooler":
    case "frieza":
    case "flo":
    case "deb":
      return "tablet";
    case "lenok":
      return "watch";
    default:
      return "phone";
  }
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
              $schema:
                "https://raw.githubusercontent.com/ubports/installer-configs/master/v2/schema/device.schema.json",
              name: config.name,
              codename: config.codename,
              formfactor: getFormfactor(config.codename),
              aliases: await getAliases(config.codename),
              doppelgangers: [],
              user_actions: config.user_actions || [],
              unlock: config.unlock || [],
              operating_systems: config.operating_systems.map(transformOSs),
              ...config,
            }))
            .then((config) =>
              writeYAML(
                path.join("v2", "data", "devices", `${config.codename}.yml`),
                config
              ).then(() => ({
                name: config.name,
                codename: config.codename,
                formfactor: config.formfactor,
                operating_systems: config.operating_systems.map(
                  (os) => os.name
                ),
                aliases: config.aliases,
              }))
            )
        )
    )
  )
  .then((configs) =>
    configs.reduce(
      (acc, curr) => {
        acc.index[curr.codename] = {
          name: curr.name,
          formfactor: curr.formfactor,
          operating_systems: curr.operating_systems,
        };
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
