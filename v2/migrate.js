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
        user_action: {
          action: step.fallback_user_action,
        },
      },
    ];
    delete step.fallback_user_action;
  }
  return {
    [step.type]: {
      group: step.group,
      files: step.files,
      partitions: step.flash,
      partition: step.partition,
      type: step.partitionType,
      size: step.size,
      action: step.action,
      to_state: step.to_state,
      file: step.file,
      slot: step.slot,
    },
    optional: step.optional,
    fallback: step.fallback,
    condition: step.condition,
  };
}

function transformOSs(os) {
  delete os.sanity_check;
  const steps = os.steps.map(transformStep);
  os.steps = steps;
  return {
    steps,
    test: "this",
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

function getHandlers(codename) {
  switch (codename) {
    case "suzu":
      return {
        bootloader_locked: [
          {
            "fastboot:oem-unlock": {
              code_url:
                "https://developer.sony.com/develop/open-devices/get-started/unlock-bootloader/",
            },
          },
        ],
      };
    case "sargo":
    case "santoni":
    case "yggdrasil":
      return {
        bootloader_locked: [
          {
            "fastboot:flashing-unlock": {
              yml: undefined, // HACK needed for proper yml formatting
            },
          },
        ],
      };
    default:
      return {
        bootloader_locked: [
          {
            "fastboot:oem-unlock": {
              yml: undefined, // HACK needed for proper yml formatting
            },
          },
        ],
      };
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
              name: config.name,
              codename: config.codename,
              formfactor: getFormfactor(config.codename),
              aliases: await getAliases(config.codename),
              doppelgangers: [],
              user_actions: config.user_actions || [],
              unlock: config.unlock || [],
              handlers: getHandlers(config.codename),
              operating_systems: config.operating_systems.map((os) =>
                transformOSs(os)
              ),
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
