# UBports Installer configs [![Build Status](https://travis-ci.org/ubports/installer-configs.svg?branch=master)](https://travis-ci.org/ubports/installer-configs)

This repository contains the config files for the [UBports Installer](https://github.com/ubports/ubports-installer).

To add a new device, add a codename-name mapping to [index.json](./index.json), add overrides for all alternative codenames to [aliases.json](./aliases.json) and commit a config file that follows the [schema](./v1/_device.schema.json) to the [v1](./v1) folder. You must always test configs before committing, only working configs will be accepted.  

Run `npm run validate:index && npm run validate:aliases && npm run validate:devices` to make sure you followed the schema correctly.

If you want to propose changes to the structure or propose a new step type, open an [issue](https://github.com/ubports/installer-configs/issues/new). Device-specific issues should be filed directly against the [UBports Installer](https://github.com/ubports/ubports-installer/issues/new).

### Test device configs

You can test device configs using 
```
ubports-installer -f [config]
```
