# adb:push action Schema

```txt
v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/21/properties/adb:push
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [device.schema.json*](../device.schema.json "open original schema") |

## adb:push Type

`object` ([adb:push action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-adbpush-action-properties-adbpush-action.md))

# adb:push Properties

| Property        | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                                                                                     |
| :-------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [files](#files) | `array`  | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-adbpush-action-properties-adbpush-action-properties-files.md "v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/21/properties/adb:push/properties/files")           |
| [group](#group) | `string` | Required | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-adbpush-action-properties-adbpush-action-properties-group.md "v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/21/properties/adb:push/properties/group")           |
| [dest](#dest)   | `string` | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-adbpush-action-properties-adbpush-action-properties-destination-path.md "v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/21/properties/adb:push/properties/dest") |

## files

File names to push

`files`

*   is optional

*   Type: `string[]`

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-adbpush-action-properties-adbpush-action-properties-files.md "v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/21/properties/adb:push/properties/files")

### files Type

`string[]`

## group



`group`

*   is required

*   Type: `string` ([Group](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-adbpush-action-properties-adbpush-action-properties-group.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-adbpush-action-properties-adbpush-action-properties-group.md "v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/21/properties/adb:push/properties/group")

### group Type

`string` ([Group](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-adbpush-action-properties-adbpush-action-properties-group.md))

## dest

Path on the device to push files to

`dest`

*   is optional

*   Type: `string` ([Destination path](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-adbpush-action-properties-adbpush-action-properties-destination-path.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-adbpush-action-properties-adbpush-action-properties-destination-path.md "v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/21/properties/adb:push/properties/dest")

### dest Type

`string` ([Destination path](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-adbpush-action-properties-adbpush-action-properties-destination-path.md))
