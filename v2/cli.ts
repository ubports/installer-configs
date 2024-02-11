#!/usr/bin/env -S node --loader ts-node/esm

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

import YAML from "yaml";
import fs from "fs/promises";
import { readFileSync } from "fs";
import path from "path";
import { program } from "commander";
import { validate } from "./validator.js";
import { globby } from "globby";
import chalk from "chalk";
import { ErrorObject } from "ajv";
import { UBportsInstallerConfig } from "../lib/schema";
import assert from "assert";

const log = {
  i: (...args: string[]) => console.log(chalk.green(...args)),
  e: (...args: string[]) => console.error(chalk.red(...args)),
  validationError: (errors: ErrorObject[]) =>
    console.warn(
      errors
        .map(
          ({ instancePath, message, schemaPath }) =>
            `  ${chalk.yellow(instancePath.replace("/", ""))}: ${chalk.red(
              message
            )} (see ${schemaPath})`
        )
        .join("\n")
    )
};

/** validate an individual file */
const processConfigs = async (cb, ...globs: string[]) => {
  const files = await globby(globs);
  return Promise.all(
    files.map(file =>
      fs
        .readFile(file, "utf-8")
        .then(cfg => YAML.parse(cfg))
        .then(obj => cb(obj as UBportsInstallerConfig, file as string))
    )
  ).then(r => r.flat());
};

const { name, version, description } = JSON.parse(
  readFileSync(
    path.resolve(
      path.dirname(new URL(import.meta.url).pathname),
      "..",
      "package.json"
    ),
    "utf-8"
  )
);

program
  .name(name)
  .description(description)
  .version(version)
  .command("validate", { isDefault: true })
  .summary("validate a file")
  .description("Validate a UBports Installer config YAML file.")
  .argument("[glob...]", "file(s) to validate", ["v2/devices/"])
  .action(async glob => {
    if (
      (
        await processConfigs((obj, file) => {
          if (validate(obj)) {
            log.i(file, "valid");
          } else {
            log.e(file, "INVALID");
            log.validationError(validate.errors || []);
          }
          return validate.errors || [];
        }, ...glob)
      ).length
    )
      process.exit(1);
  });

program
  .command("test")
  .summary("Test the schema definition")
  .description(
    "Test UBports Installer config Schema against YAML files. Files may specify 'expectedErrors' on the top level."
  )
  .argument("[glob...]", "file(s) to test", ["v2/test/**/*"])
  .action(async glob => {
    if (
      (
        await processConfigs(({ expectedErrors, ...obj }, file) => {
          if (!expectedErrors) {
            if (validate(obj)) {
              log.i(file, "valid as expected");
              return [];
            } else {
              log.e(file, "unexpectedly invalid");
              log.validationError(validate.errors || []);
              return validate.errors;
            }
          } else {
            if (validate(obj)) {
              log.e(file, "unexpectedly valid");
            } else {
              try {
                assert.deepStrictEqual(validate.errors, expectedErrors);
                log.i(file, "invalid as expected");
                return [];
              } catch (e) {
                log.i(file, "unsatisfied error expectations");
                console.error(e);
                return [e];
              }
            }
          }
          return validate.errors == expectedErrors;
        }, ...glob)
      ).length
    )
      process.exit(1);
  });

// TODO
program
  .command("checkdownload", { hidden: true })
  .summary("check file downloads")
  .description("ensure all files mentioned in a config can be download")
  .argument("[glob...]", "file(s) to check", ["./v2/devices"]);

// TODO
program
  .command("compatibility", { hidden: true })
  .summary("check required versions")
  .description(
    "Ensure all files work with a specified version of the UBports Installer. If no version is specified, the latest version is determined."
  )
  .argument("[glob...]", "file(s) to check", ["./v2/devices"])
  .option(
    "-v, --ubports-installer-version <version>",
    "version to check, defaults to latest version"
  );

program.parse();
