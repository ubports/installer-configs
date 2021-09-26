# core:manual_download action Schema

```txt
v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/26/properties/core:manual_download
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [device.schema.json*](../device.schema.json "open original schema") |

## core:manual_download Type

`object` ([core:manual_download action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coremanual_download-action-properties-coremanual_download-action.md))

# core:manual_download Properties

| Property        | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                                                                                                               |
| :-------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [group](#group) | `string` | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coremanual_download-action-properties-coremanual_download-action-properties-group.md "v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/26/properties/core:manual_download/properties/group") |
| [file](#file)   | `object` | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coremanual_download-action-properties-coremanual_download-action-properties-file.md "v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/26/properties/core:manual_download/properties/file")   |

## group

Files group

`group`

*   is optional

*   Type: `string` ([Group](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coremanual_download-action-properties-coremanual_download-action-properties-group.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coremanual_download-action-properties-coremanual_download-action-properties-group.md "v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/26/properties/core:manual_download/properties/group")

### group Type

`string` ([Group](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coremanual_download-action-properties-coremanual_download-action-properties-group.md))

## file

File to download

`file`

*   is optional

*   Type: `object` ([File](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coremanual_download-action-properties-coremanual_download-action-properties-file.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coremanual_download-action-properties-coremanual_download-action-properties-file.md "v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/26/properties/core:manual_download/properties/file")

### file Type

`object` ([File](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coremanual_download-action-properties-coremanual_download-action-properties-file.md))
