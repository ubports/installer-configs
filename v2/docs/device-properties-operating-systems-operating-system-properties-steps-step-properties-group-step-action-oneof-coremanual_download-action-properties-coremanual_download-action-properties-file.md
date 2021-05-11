# File Schema

```txt
v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/26/properties/core:manual_download/properties/file
```

File to download

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [device.schema.json*](../device.schema.json "open original schema") |

## file Type

`object` ([File](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coremanual_download-action-properties-coremanual_download-action-properties-file.md))

# file Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                                                                                                                                                       |
| :-------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [url](#url)           | `string` | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coremanual_download-action-properties-coremanual_download-action-properties-file-properties-url.md "v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/26/properties/core:manual_download/properties/file/properties/url")             |
| [checksum](#checksum) | `object` | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coremanual_download-action-properties-coremanual_download-action-properties-file-properties-checksum.md "v2/schema/checksum.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/26/properties/core:manual_download/properties/file/properties/checksum") |

## url

URL of the file to download

`url`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coremanual_download-action-properties-coremanual_download-action-properties-file-properties-url.md "v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/26/properties/core:manual_download/properties/file/properties/url")

### url Type

`string`

## checksum

Verify a file's integrity by checking it with a hashing algorithm

`checksum`

*   is optional

*   Type: `object` ([Checksum](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coremanual_download-action-properties-coremanual_download-action-properties-file-properties-checksum.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coremanual_download-action-properties-coremanual_download-action-properties-file-properties-checksum.md "v2/schema/checksum.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/26/properties/core:manual_download/properties/file/properties/checksum")

### checksum Type

`object` ([Checksum](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coremanual_download-action-properties-coremanual_download-action-properties-file-properties-checksum.md))
