# UBports Installer configs ![Continuous Integration](https://github.com/ubports/installer-configs/workflows/Continuous%20Integration/badge.svg)

This repository contains the config files for the [UBports Installer](https://github.com/ubports/ubports-installer).

To add a new device, add a codename-name mapping to [index.json](./index.json), add overrides for all alternative codenames to [aliases.json](./aliases.json) and commit a config file that follows the [schema](./v1/_device.schema.json) to the [v1](./v1) folder. You must always test configs before committing, only working configs will be accepted.

Run `npm run validate` to make sure you followed the schema correctly.

If you want to propose changes to the structure or propose a new step type, open an [issue](https://github.com/ubports/installer-configs/issues/new). Device-specific issues should be filed directly against the [UBports Installer](https://github.com/ubports/ubports-installer/issues/new).

## Test device configs

You can use your local config file with the [UBports Installer](https://github.com/ubports/ubports-installer) by supplying the `--file` or `-f` flag:

```
ubports-installer -f ./path/to/config.json
```

## v2 working draft (WIP)

[Version 2 of the config file structure](./v1/schema) is currently being drafted. The changes in specification draw from the experience made with the first version of the specification. You can [view the open RFCs on the issue tracker](https://github.com/ubports/installer-configs/issues?q=is%3Aissue+is%3Aopen+label%3Arfc) or [open an issue](https://github.com/ubports/installer-configs/issues/new/choose) to propose a change.

### Planned changes

- The full schema will be validated and documented using JSON-schema. Previously, some parts of the structure could not be efficiently validated and documentation was not provided in a convenient way.
- To make the config files easier to read and write, the repository will use [YAML](https://yaml.org/) syntax.
- For improved API speed, the installer will no longer fetch raw data from `raw.githubusercontent.com`. Instead, the YAML files from the repository will be transpiled to static minified JSON and served from a highly available web server.
- The `aliases.json` and `index.json` files from this repository will no longer be used and instead be generated and served by the server.
- Every device may specify its known `aliases` in an array on the top level of its config file.
- Multiple devices may claim the same alias. The UBports Installer will then consult the user to resolve the conflict.
- The `fallback_user_action` property has been deprecated. You can now specify a list of steps as the `fallback` property. [ubports-installer#941](https://github.com/ubports/ubports-installer/issues/941)
- Implement `group` step [ubports-installer#940](https://github.com/ubports/ubports-installer/issues/940)
- Implement flexible oem and flashing unlock instructions [ubports-installer#1479](https://github.com/ubports/ubports-installer/issues/1479)
- Implement more advanced conditional logic [ubports-installer#1537](https://github.com/ubports/ubports-installer/issues/1537)
- Steps as keyed objects [#17](https://github.com/ubports/installer-configs/issues/17)

### Helper scripts

NPM Scripts have been created in the `v2` namespace to aid the planning and transition process:

```bash
npm run v2:migrate # Migrate all v1 configs from this repository to v2 structure and save them under v2/data/devices/<codename>.yml. The aliases.yml and index.yml files will be generated in v2/data.
npm run v2:validate # Validate the generated yml files using the JSON-schema definitions from v2/schema.
npm run v2:docs # build schema documentation as markdown documentation files in v2/docs.
npm run v2:serve # serve docs on port 8642
npm run lint # enforce prettier code style on js scripts
```

**NOTE**: While v2 is still being drafted, v1 will continue to be used. No v2 configs will be committed to the repository before the transition process is complete.
