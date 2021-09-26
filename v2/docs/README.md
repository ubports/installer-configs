# README

## Top-level Schemas

*   [Device](./device.md "Device configuration for the UBports Installer") – `v2/schema/device.schema.yml`

## Other Schemas

### Objects

*   [Action](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action.md "Atomic action") – `v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items`

*   [Checksum](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coremanual_download-action-properties-coremanual_download-action-properties-file-properties-checksum.md "Verify a file's integrity by checking it with a hashing algorithm") – `v2/schema/checksum.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/26/properties/core:manual_download/properties/file/properties/checksum`

*   [EULA](./device-properties-operating-systems-operating-system-properties-eula.md "An end-user license agreement") – `v2/schema/operating_systems.schema.yml#/properties/operating_systems/items/properties/eula`

*   [File](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coredownload-action-properties-coredownload-action-properties-files-file.md) – `v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/23/properties/core:download/properties/files/items`

*   [File](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coremanual_download-action-properties-coremanual_download-action-properties-file.md "File to download") – `v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/26/properties/core:manual_download/properties/file`

*   [Handlers](./device-properties-handlers.md "Steps to run to handle specific known errors") – `v2/schema/device.schema.yml#/properties/handlers`

*   [Operating system](./device-properties-operating-systems-operating-system.md "An operating system available for installation") – `v2/schema/operating_systems.schema.yml#/properties/operating_systems/items`

*   [Option](./device-properties-operating-systems-operating-system-properties-options-option.md "Option for the installation") – `v2/schema/options.schema.yml#/properties/operating_systems/items/properties/options/items`

*   [Partition](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-heimdallflash-action-properties-heimdallflash-action-properties-partitions-partition.md "Partition to flash") – `v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/0/properties/heimdall:flash/properties/partitions/items`

*   [Partition](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-fastbootflash-action-properties-fastbootflash-action-properties-partitions-partition.md "Partition to flash") – `v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/15/properties/fastboot:flash/properties/partitions/items`

*   [Remote values](./device-properties-operating-systems-operating-system-properties-options-option-properties-remote-values.md "If the values can be generated from a remote source like the systemimage api, this provides the required information for that") – `v2/schema/options.schema.yml#/properties/operating_systems/items/properties/options/items/properties/remote_values`

*   [Slide](./device-properties-operating-systems-operating-system-properties-slideshow-slide.md "Slide about the operating system") – `v2/schema/operating_systems.schema.yml#/properties/operating_systems/items/properties/slideshow/items`

*   [Step](./device-properties-handlers-properties-step.md "Installation step") – `v2/schema/step.schema.yml#/properties/handlers/properties/bootloader_locked`

*   [Untitled object in Device](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-fastbootoem_unlock-action-properties-fastbootoem_unlock-action-oneof-1.md) – `v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/4/properties/fastboot:oem_unlock/oneOf/1`

*   [Untitled object in Device](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coreunpack-action-properties-coreunpack-action-properties-files-items.md) – `v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/25/properties/core:unpack/properties/files/items`

*   [User action](./device-properties-user-actions-patternproperties-user-action.md "Instruction that can be referenced and presented to the user") – `v2/schema/user_actions.schema.yml#/properties/user_actions/patternProperties/\w`

*   [User actions](./device-properties-user-actions.md "Object that contains instructions for the user for later reference") – `v2/schema/user_actions.schema.yml#/properties/user_actions`

*   [adb:format action](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-adbformat-action-properties-adbformat-action.md) – `v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/19/properties/adb:format`

*   [adb:push action](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-adbpush-action-properties-adbpush-action.md) – `v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/21/properties/adb:push`

*   [adb:reboot action](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-adbreboot-action-properties-adbreboot-action.md) – `v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/18/properties/adb:reboot`

*   [adb:shell action](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-adbshell-action-properties-adbshell-action.md "Run a command on the device via adb shell") – `v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/17/properties/adb:reboot`

*   [adb:sideload action](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-adbsideload-action-properties-adbsideload-action.md) – `v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/20/properties/adb:sideload`

*   [core:download action](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coredownload-action-properties-coredownload-action.md) – `v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/23/properties/core:download`

*   [core:info action](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coreinfo-action-properties-coreinfo-action.md) – `v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/1/properties/core:info`

*   [core:manual_download action](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coremanual_download-action-properties-coremanual_download-action.md) – `v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/26/properties/core:manual_download`

*   [core:unpack action](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coreunpack-action-properties-coreunpack-action.md) – `v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/25/properties/core:unpack`

*   [core:user_action action](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coreuser_action-action-properties-coreuser_action-action.md) – `v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/3/properties/core:user_action`

*   [core:write action](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-corewrite-action-properties-corewrite-action.md) – `v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/24/properties/core:write`

*   [fastboot:boot action](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-fastbootboot-action-properties-fastbootboot-action.md) – `v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/10/properties/fastboot:boot`

*   [fastboot:erase action](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-fastbooterase-action-properties-fastbooterase-action.md) – `v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/13/properties/fastboot:erase`

*   [fastboot:flash action](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-fastbootflash-action-properties-fastbootflash-action.md) – `v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/15/properties/fastboot:flash`

*   [fastboot:format action](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-fastbootformat-action-properties-fastbootformat-action.md) – `v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/14/properties/fastboot:format`

*   [fastboot:set_active action](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-fastbootset_active-action-properties-fastbootset_active-action.md) – `v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/16/properties/fastboot:set_active`

*   [fastboot:update action](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-fastbootupdate-action-properties-fastbootupdate-action.md) – `v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/7/properties/fastboot:update`

*   [heimdall:flash action](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-heimdallflash-action-properties-heimdallflash-action.md) – `v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/0/properties/heimdall:flash`

### Arrays

*   [Aliases](./device-properties-aliases.md "Alternative codenames this device might be identified as") – `v2/schema/device.schema.yml#/properties/aliases`

*   [Arguments](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-adbshell-action-properties-adbshell-action-properties-arguments.md "Shell arguments") – `v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/17/properties/adb:reboot/properties/args`

*   [Doppelgangers](./device-properties-doppelgangers.md "Codenames of devices this device should not be confused with") – `v2/schema/device.schema.yml#/properties/doppelgangers`

*   [Fallback steps](./device-properties-operating-systems-operating-system-properties-steps-step-properties-fallback-steps.md) – `v2/schema/step.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/fallback`

*   [Files](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-adbpush-action-properties-adbpush-action-properties-files.md "File names to push") – `v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/21/properties/adb:push/properties/files`

*   [Files](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coredownload-action-properties-coredownload-action-properties-files.md "Array of files to download") – `v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/23/properties/core:download/properties/files`

*   [Operating systems](./device-properties-operating-systems.md "An array of objects describing operating systems available for installation") – `v2/schema/operating_systems.schema.yml#/properties/operating_systems`

*   [Options](./device-properties-operating-systems-operating-system-properties-options.md "Options for the installation") – `v2/schema/options.schema.yml#/properties/operating_systems/items/properties/options`

*   [Partitions](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-heimdallflash-action-properties-heimdallflash-action-properties-partitions.md "Partitions to flash") – `v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/0/properties/heimdall:flash/properties/partitions`

*   [Partitions](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-fastbootflash-action-properties-fastbootflash-action-properties-partitions.md "Partitions to flash") – `v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/15/properties/fastboot:flash/properties/partitions`

*   [Prerequisites](./device-properties-operating-systems-operating-system-properties-prerequisites.md "An array of strings referring to user_actions defined above that are needed before the installation") – `v2/schema/operating_systems.schema.yml#/properties/operating_systems/items/properties/prerequisites`

*   [Slideshow](./device-properties-operating-systems-operating-system-properties-slideshow.md "An array of slides presenting the operating system's most compelling features") – `v2/schema/operating_systems.schema.yml#/properties/operating_systems/items/properties/slideshow`

*   [Steps](./device-properties-operating-systems-operating-system-properties-steps.md "An ordered array of objects describing steps required to install the operating system") – `v2/schema/operating_systems.schema.yml#/properties/operating_systems/items/properties/steps`

*   [Unlock actions](./device-properties-unlock-actions.md "An array of strings referring to user_actions defined above that are needed to unlock the device") – `v2/schema/device.schema.yml#/properties/unlock`

*   [Untitled array in Device](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coreunpack-action-properties-coreunpack-action-properties-files.md) – `v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/25/properties/core:unpack/properties/files`

*   [Values](./device-properties-operating-systems-operating-system-properties-options-option-properties-values.md "List of values for the select") – `v2/schema/options.schema.yml#/properties/operating_systems/items/properties/options/items/properties/values`

*   [core:group action](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coregroup-action-properties-coregroup-action.md) – `v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/2/properties/core:group`

*   [group step](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step.md) – `v2/schema/step.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions`

## Version Note

The schemas linked above follow the JSON Schema Spec version: `http://json-schema.org/draft-07/schema#`
