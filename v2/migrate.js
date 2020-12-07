#!/usr/bin/env node

const fs = require("fs/promises");
const path = require("path");
const YAML = require("json-to-pretty-yaml");

function readJSON(file) {
  return fs.readFile(file).then(JSON.parse);
}

function writeYAML(file, data) {
  return Promise.all([
    fs.writeFile(file, YAML.stringify(data)),
    fs.writeFile(
      file.replace("/data/", "/json/").replace(".yml", ".json"),
      JSON.stringify(data)
    )
  ]);
}

const aliases = readJSON("aliases.json");
async function getAliases(codename) {
  return Object.entries(await aliases)
    .map(([variable, value]) => (value === codename ? variable : null))
    .filter(a => a);
}

function getType(type) {
  if (type === "systemimage") return "systemimage:install";
  return type.includes(":") ? type : `core:${type}`;
}

function transformOption(options) {
  if (options.remote_values) {
    options.remote_values = {
      "systemimage:channels": {
        yml: undefined // HACK needed for proper yml formatting
      }
    };
  }
  return options;
}

function transformStep(step) {
  if (step.fallback_user_action) {
    step.fallback = [
      {
        "core:user_action": {
          action: step.fallback_user_action
        }
      }
    ];
    delete step.fallback_user_action;
  }
  return {
    actions: [
      {
        [getType(step.type)]: {
          group: step.group,
          files: step.files,
          partitions: step.flash,
          partition: step.partition,
          type: step.partitionType,
          size: step.size,
          action: step.action,
          to_state: step.to_state,
          file: step.file,
          slot: step.slot
        }
      }
    ],
    optional: step.optional,
    fallback: step.fallback,
    condition: step.condition
  };
}

function transformOSs(os) {
  delete os.sanity_check;
  if (os.name === "VollaOS")
    os.eula = {
      title: "EULA",
      description:
        "THE TERMS OF USE OF THE VOLLA OS ONLY ALLOW AN INSTALLATION ON A CLEARLY BRANDED VOLLA PHONE. To proceed with the installation you have to confirm that you have read and understood the End User License Agreement (EULA) of Hallo Welt Systeme UG (haftungsbeschränkt) for the Volla OS and agree to it.",
      link: "https://volla.online/license"
    };
  const steps = os.steps.map(transformStep);
  os.steps = steps;
  const options = os.options.map(transformOption);
  os.options = options;
  return {
    steps,
    options,
    ...os
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
        bootloader_locked: {
          actions: [
            {
              "fastboot:oem_unlock": {
                code_url:
                  "https://developer.sony.com/develop/open-devices/get-started/unlock-bootloader/"
              }
            }
          ]
        }
      };
    case "sargo":
    case "santoni":
    case "yggdrasil":
      return {
        bootloader_locked: {
          actions: [
            {
              "fastboot:flashing_unlock": {
                yml: undefined // HACK needed for proper yml formatting
              }
            }
          ]
        }
      };
    default:
      return {
        bootloader_locked: {
          actions: [
            {
              "fastboot:oem_unlock": {
                yml: undefined // HACK needed for proper yml formatting
              }
            }
          ]
        }
      };
  }
}

fs.mkdir(path.join("v2", "data", "devices"), { recursive: true })
  .then(() => fs.mkdir(path.join("v2", "json", "devices"), { recursive: true }))
  .then(() => fs.readdir("v1"))
  .then(configs =>
    Promise.all(
      configs
        .filter(c => !c.startsWith("_"))
        .map(configPath =>
          readJSON(path.join("v1", configPath))
            .then(async config => ({
              name: config.name,
              codename: config.codename,
              formfactor: getFormfactor(config.codename),
              aliases: await getAliases(config.codename),
              doppelgangers: [],
              user_actions: config.user_actions || [],
              unlock: config.unlock || [],
              handlers: getHandlers(config.codename),
              operating_systems: config.operating_systems.map(os =>
                transformOSs(os)
              ),
              ...config
            }))
            .then(config =>
              writeYAML(
                path.join("v2", "data", "devices", `${config.codename}.yml`),
                config
              ).then(() => ({
                name: config.name,
                codename: config.codename,
                formfactor: config.formfactor,
                operating_systems: config.operating_systems.map(os => os.name),
                aliases: config.aliases
              }))
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
          operating_systems: curr.operating_systems
        });
        curr.aliases.forEach(alias => {
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
      writeYAML(path.join("v2", "data", "index.yml"), index),
      writeYAML(path.join("v2", "data", "aliases.yml"), aliases)
    ])
  );
