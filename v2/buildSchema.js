#!/usr/bin/env node

const $RefParser = require("@apidevtools/json-schema-ref-parser");
const fs = require("fs/promises");
const path = require("path");

fs.mkdir(path.join("public", "v2"), { recursive: true })
  .then(() => $RefParser.bundle("v2/schema/device.schema.yml"))
  .then(JSON.stringify)
  .then(schema => fs.writeFile("public/v2/device.schema.json", schema));
