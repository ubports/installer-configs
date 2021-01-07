# File Schema

```txt
v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/19/properties/core:download/properties/files/items
```




| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                           |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | -------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [device.schema.json\*](../device.schema.json "open original schema") |

## items Type

`object` ([File](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coredownload-action-properties-coredownload-action-properties-files-file.md))

# File Properties

| Property              | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                                                                                                                                             |
| :-------------------- | ------------- | -------- | -------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [url](#url)           | `string`      | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coredownload-action-properties-coredownload-action-properties-files-file-properties-url.md "v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/19/properties/core:download/properties/files/items/properties/url")           |
| [checksum](#checksum) | Not specified | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coredownload-action-properties-coredownload-action-properties-files-file-properties-checksum.md "v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/19/properties/core:download/properties/files/items/properties/checksum") |

## url

URL of the file to download


`url`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coredownload-action-properties-coredownload-action-properties-files-file-properties-url.md "v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/19/properties/core:download/properties/files/items/properties/url")

### url Type

`string`

## checksum




`checksum`

-   is optional
-   Type: unknown
-   cannot be null
-   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coredownload-action-properties-coredownload-action-properties-files-file-properties-checksum.md "v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/19/properties/core:download/properties/files/items/properties/checksum")

### checksum Type

unknown
