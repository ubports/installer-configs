# core:download action Schema

```txt
v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/23/properties/core:download
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [device.schema.json*](../device.schema.json "open original schema") |

## core:download Type

`object` ([core:download action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coredownload-action-properties-coredownload-action.md))

# core:download Properties

| Property        | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                                                                                          |
| :-------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [group](#group) | `string` | Required | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coredownload-action-properties-coredownload-action-properties-group.md "v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/23/properties/core:download/properties/group") |
| [files](#files) | `array`  | Required | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coredownload-action-properties-coredownload-action-properties-files.md "v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/23/properties/core:download/properties/files") |

## group

Files group

`group`

*   is required

*   Type: `string` ([Group](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coredownload-action-properties-coredownload-action-properties-group.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coredownload-action-properties-coredownload-action-properties-group.md "v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/23/properties/core:download/properties/group")

### group Type

`string` ([Group](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coredownload-action-properties-coredownload-action-properties-group.md))

## files

Array of files to download.

`files`

*   is required

*   Type: `object[]` ([File](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coredownload-action-properties-coredownload-action-properties-files-file.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coredownload-action-properties-coredownload-action-properties-files.md "v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/23/properties/core:download/properties/files")

### files Type

`object[]` ([File](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coredownload-action-properties-coredownload-action-properties-files-file.md))
