# File Schema

```txt
v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/23/properties/core:download/properties/files/items
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [device.schema.json*](../device.schema.json "open original schema") |

## items Type

`object` ([File](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coredownload-action-properties-coredownload-action-properties-files-file.md))

# items Properties

| Property              | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                                                                                                                                             |
| :-------------------- | :------------ | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [url](#url)           | `string`      | Required | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coredownload-action-properties-coredownload-action-properties-files-file-properties-url.md "v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/23/properties/core:download/properties/files/items/properties/url")           |
| [name](#name)         | `string`      | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coredownload-action-properties-coredownload-action-properties-files-file-properties-name.md "v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/23/properties/core:download/properties/files/items/properties/name")         |
| [checksum](#checksum) | Not specified | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coredownload-action-properties-coredownload-action-properties-files-file-properties-checksum.md "v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/23/properties/core:download/properties/files/items/properties/checksum") |

## url

URL of the file to download

`url`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coredownload-action-properties-coredownload-action-properties-files-file-properties-url.md "v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/23/properties/core:download/properties/files/items/properties/url")

### url Type

`string`

## name

Name to save the file under on disk

`name`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coredownload-action-properties-coredownload-action-properties-files-file-properties-name.md "v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/23/properties/core:download/properties/files/items/properties/name")

### name Type

`string`

## checksum



`checksum`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coredownload-action-properties-coredownload-action-properties-files-file-properties-checksum.md "v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/23/properties/core:download/properties/files/items/properties/checksum")

### checksum Type

unknown
