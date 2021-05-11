# Untitled object in Device Schema

```txt
v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/25/properties/core:unpack/properties/files/items
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [device.schema.json*](../device.schema.json "open original schema") |

## items Type

`object` ([Details](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coreunpack-action-properties-coreunpack-action-properties-files-items.md))

# items Properties

| Property            | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                                                                                                                                              |
| :------------------ | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [archive](#archive) | `string` | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coreunpack-action-properties-coreunpack-action-properties-files-items-properties-zip-to-sideload.md "v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/25/properties/core:unpack/properties/files/items/properties/archive") |
| [dir](#dir)         | `string` | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coreunpack-action-properties-coreunpack-action-properties-files-items-properties-target-directory.md "v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/25/properties/core:unpack/properties/files/items/properties/dir")    |

## archive



`archive`

*   is optional

*   Type: `string` ([Zip to sideload](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coreunpack-action-properties-coreunpack-action-properties-files-items-properties-zip-to-sideload.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coreunpack-action-properties-coreunpack-action-properties-files-items-properties-zip-to-sideload.md "v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/25/properties/core:unpack/properties/files/items/properties/archive")

### archive Type

`string` ([Zip to sideload](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coreunpack-action-properties-coreunpack-action-properties-files-items-properties-zip-to-sideload.md))

## dir



`dir`

*   is optional

*   Type: `string` ([Target directory](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coreunpack-action-properties-coreunpack-action-properties-files-items-properties-target-directory.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coreunpack-action-properties-coreunpack-action-properties-files-items-properties-target-directory.md "v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/25/properties/core:unpack/properties/files/items/properties/dir")

### dir Type

`string` ([Target directory](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coreunpack-action-properties-coreunpack-action-properties-files-items-properties-target-directory.md))
