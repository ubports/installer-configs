# Action Schema

```txt
v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items
```

Atomic action

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [device.schema.json*](../device.schema.json "open original schema") |

## items Type

`object` ([Action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action.md))

one (and only one) of

*   [heimdall:flash action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-heimdallflash-action.md "check type definition")

*   [core:info action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coreinfo-action.md "check type definition")

*   [core:group action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coregroup-action.md "check type definition")

*   [core:user_action action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coreuser_action-action.md "check type definition")

*   [fastboot:oem_unlock action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-fastbootoem_unlock-action.md "check type definition")

*   [fastboot:flashing_unlock action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-fastbootflashing_unlock-action.md "check type definition")

*   [fastboot:reboot_bootloader action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-fastbootreboot_bootloader-action.md "check type definition")

*   [fastboot:update action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-fastbootupdate-action.md "check type definition")

*   [systemimage:install action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-systemimageinstall-action.md "check type definition")

*   [asteroid_os:download action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-asteroid_osdownload-action.md "check type definition")

*   [fastboot:boot action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-fastbootboot-action.md "check type definition")

*   [fastboot:reboot action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-fastbootreboot-action.md "check type definition")

*   [fastboot:continue action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-fastbootcontinue-action.md "check type definition")

*   [fastboot:erase action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-fastbooterase-action.md "check type definition")

*   [fastboot:format action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-fastbootformat-action.md "check type definition")

*   [fastboot:flash action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-fastbootflash-action.md "check type definition")

*   [fastboot:set_active action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-fastbootset_active-action.md "check type definition")

*   [adb:shell action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-adbshell-action.md "check type definition")

*   [adb:reboot action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-adbreboot-action.md "check type definition")

*   [adb:format action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-adbformat-action.md "check type definition")

*   [adb:sideload action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-adbsideload-action.md "check type definition")

*   [adb:push action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-adbpush-action.md "check type definition")

*   [adb:preparesystemimage action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-adbpreparesystemimage-action.md "check type definition")

*   [core:download action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coredownload-action.md "check type definition")

*   [core:write action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-corewrite-action.md "check type definition")

*   [core:unpack action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coreunpack-action.md "check type definition")

*   [core:manual_download action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coremanual_download-action.md "check type definition")
