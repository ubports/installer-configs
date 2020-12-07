# UBports Installer configs ![Continuous Integration](https://github.com/ubports/installer-configs/workflows/Continuous%20Integration/badge.svg)

This repository contains the config files for [UBports Installer](https://github.com/ubports/ubports-installer) devices.

Devices are configured using [YAML](https://yaml.org/) files following the [schema specifcation](./v2/schema/device.schema.yml) in the [./v2/devices](./v2/devices) directory.

If you want to propose changes to the structure or propose a new action, open an [issue](https://github.com/ubports/installer-configs/issues/new). Device-specific installation issues should be filed directly against the [UBports Installer's repository](https://github.com/ubports/ubports-installer/issues/new).

## Contributing

If you want to add a or improve a device, run `npm run validate` to make sure your file follows the specification and `npm run lint` to make it pretty.

You can use your local config file with the [UBports Installer](https://github.com/ubports/ubports-installer) by supplying the `--file` or `-f` flag:

```
ubports-installer -f ./path/to/config.yml
```

## Specification

### v3

**WIP**: You can [view the open RFCs on the issue tracker](https://github.com/ubports/installer-configs/issues?q=is%3Aissue+is%3Aopen+label%3Arfc) or [open an issue](https://github.com/ubports/installer-configs/issues/new/choose) to propose a change.

### v2

- **published: November 2020**
- **lead author: Jan Sprinz**
- [JSON Schema](https://github.com/ubports/installer-configs/blob/master/v2/schema/device.schema.yml)

Starting with version 0.8.1-beta, the UBports Installer uses version 2 of the config file structure. The changes in specification draw from the experience made with the initial version of the specification and take some inspiration from [Ansible Playbooks](https://www.ansible.com/) and the [OPEN-CUTS combination filtering language](https://www.open-cuts.org/).

Some of the high-level changes include:

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
- Many steps have been renamed to allow namespacing for the UBports Installer's new plugin system.
- Steps may now specify a range of actions that belong together [#17](https://github.com/ubports/installer-configs/issues/17)

### Helper scripts

NPM Scripts have been created in the `v2` namespace to aid the planning and transition process:

```bash
npm run v2:migrate # Migrate all v1 configs from this repository to v2 structure and save them under v2/data/devices/<codename>.yml. The aliases.yml and index.yml files will be generated in v2/data.
npm run v2:validate # Validate the generated yml files using the JSON-schema definitions from v2/schema.
npm run v2:docs # build schema documentation as markdown documentation files in v2/docs.
npm run v2:serve # serve docs on port 8642
npm run lint # enforce prettier code style on js scripts
```

### v1

- **published: October 2019**
- **lead author: Jan Sprinz**
- [JSON Schema](https://github.com/ubports/installer-configs/blob/master/v1/_device.schema.json)

The initial specification of the UBports Installer config files was drafted for version [0.4.1-beta](https://github.com/ubports/ubports-installer/releases/tag/0.4.1-beta) and [presented at Ubucon Europe 2019](https://youtu.be/2ZCDOe1CjZ8). It relied on plain JSON files that the UBports Installer either read from disk or downloaded directly from the git repository. The specification was used until [UBports Installer version 0.8.0-beta](https://github.com/ubports/ubports-installer/releases/tag/0.8.0-beta).

The specification includes two general files, that are written manually: The `index.json` file lists all available devices. If the installer detects a device automatically, it can query `aliases.json` to resolve the detected string to the canonical codename for the device.

Every device is configured by a `<codename>.json` file that contains information about the device, as well as a list of steps to install different operating systems. Re-usable instructions for the user ("user actions") can also be specified, as well as configuration options for each available operating system.
