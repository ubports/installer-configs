# Changelog

This changelog is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

Version 2.0.0 denotes the initial release of the ubports-installer-configs package, as the repository had previously been used solely as a data store.

## [Unreleased]

## [2.0.0]

Initial release as a module providing typescript types and a validator (available as a library or cli app).

### Added

- typescript types built from the JSONschema exported as `UBportsInstallerConfig`
- validation function exported as `validate`
- `v2/cli.js` script for validation and tests

### Changed

- `ajv-cli` has been replaced with more sophisticated logic
- migrated all background logic to typescript
- provide fragmented schema on the api as-is
