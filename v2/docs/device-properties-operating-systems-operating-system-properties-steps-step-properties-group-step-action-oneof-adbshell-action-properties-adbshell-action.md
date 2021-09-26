# adb:shell action Schema

```txt
v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/17/properties/adb:reboot
```

Run a command on the device via adb shell

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [device.schema.json*](../device.schema.json "open original schema") |

## adb:reboot Type

`object` ([adb:shell action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-adbshell-action-properties-adbshell-action.md))

# adb:reboot Properties

| Property      | Type    | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                                                                                  |
| :------------ | :------ | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [args](#args) | `array` | Required | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-adbshell-action-properties-adbshell-action-properties-arguments.md "v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/17/properties/adb:reboot/properties/args") |

## args

Shell arguments

`args`

*   is required

*   Type: `string[]`

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-adbshell-action-properties-adbshell-action-properties-arguments.md "v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/17/properties/adb:reboot/properties/args")

### args Type

`string[]`
