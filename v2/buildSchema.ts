#!/usr/bin/env -S ts-node --esm

import $RefParser from "@apidevtools/json-schema-ref-parser";
import fs from "fs/promises";
import path from "path";

fs.mkdir(path.join("build", "v2"), { recursive: true })
  .then(() => $RefParser.bundle("v2/schema/device.schema.yml"))
  .then(JSON.stringify)
  .then(schema => fs.writeFile("build/v2/device.schema.json", schema))
  .catch(err => {
    console.error(`Failed to build schema: ${err}`);
    process.exit(-1);
  });
