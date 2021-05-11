# fastboot:boot action Schema

```txt
v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/10/properties/fastboot:boot
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [device.schema.json*](../device.schema.json "open original schema") |

## fastboot:boot Type

`object` ([fastboot:boot action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-fastbootboot-action-properties-fastbootboot-action.md))

# fastboot:boot Properties

| Property        | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                                                                                          |
| :-------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [file](#file)   | `string` | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-fastbootboot-action-properties-fastbootboot-action-properties-file.md "v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/10/properties/fastboot:boot/properties/file")   |
| [group](#group) | `string` | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-fastbootboot-action-properties-fastbootboot-action-properties-group.md "v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/10/properties/fastboot:boot/properties/group") |

## file



`file`

*   is optional

*   Type: `string` ([File](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-fastbootboot-action-properties-fastbootboot-action-properties-file.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-fastbootboot-action-properties-fastbootboot-action-properties-file.md "v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/10/properties/fastboot:boot/properties/file")

### file Type

`string` ([File](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-fastbootboot-action-properties-fastbootboot-action-properties-file.md))

## group



`group`

*   is optional

*   Type: `string` ([Group](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-fastbootboot-action-properties-fastbootboot-action-properties-group.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-fastbootboot-action-properties-fastbootboot-action-properties-group.md "v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/10/properties/fastboot:boot/properties/group")

### group Type

`string` ([Group](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-fastbootboot-action-properties-fastbootboot-action-properties-group.md))
