# adb:sideload action Schema

```txt
v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/20/properties/adb:sideload
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [device.schema.json*](../device.schema.json "open original schema") |

## adb:sideload Type

`object` ([adb:sideload action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-adbsideload-action-properties-adbsideload-action.md))

# adb:sideload Properties

| Property        | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                                                                                                |
| :-------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [file](#file)   | `string` | Required | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-adbsideload-action-properties-adbsideload-action-properties-zip-to-sideload.md "v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/20/properties/adb:sideload/properties/file") |
| [group](#group) | `string` | Required | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-adbsideload-action-properties-adbsideload-action-properties-group.md "v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/20/properties/adb:sideload/properties/group")          |

## file



`file`

*   is required

*   Type: `string` ([Zip to sideload](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-adbsideload-action-properties-adbsideload-action-properties-zip-to-sideload.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-adbsideload-action-properties-adbsideload-action-properties-zip-to-sideload.md "v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/20/properties/adb:sideload/properties/file")

### file Type

`string` ([Zip to sideload](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-adbsideload-action-properties-adbsideload-action-properties-zip-to-sideload.md))

## group



`group`

*   is required

*   Type: `string` ([Group](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-adbsideload-action-properties-adbsideload-action-properties-group.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-adbsideload-action-properties-adbsideload-action-properties-group.md "v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/20/properties/adb:sideload/properties/group")

### group Type

`string` ([Group](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-adbsideload-action-properties-adbsideload-action-properties-group.md))
