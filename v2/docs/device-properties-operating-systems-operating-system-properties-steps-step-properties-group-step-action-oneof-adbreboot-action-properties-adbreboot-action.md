# adb:reboot action Schema

```txt
v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/18/properties/adb:reboot
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [device.schema.json*](../device.schema.json "open original schema") |

## adb:reboot Type

`object` ([adb:reboot action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-adbreboot-action-properties-adbreboot-action.md))

# adb:reboot Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                                                                                       |
| :-------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [to_state](#to_state) | `string` | Required | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-adbreboot-action-properties-adbreboot-action-properties-to-state.md "v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/18/properties/adb:reboot/properties/to_state") |

## to_state

State to rebot to.

`to_state`

*   is required

*   Type: `string` ([To state](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-adbreboot-action-properties-adbreboot-action-properties-to-state.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-adbreboot-action-properties-adbreboot-action-properties-to-state.md "v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/18/properties/adb:reboot/properties/to_state")

### to_state Type

`string` ([To state](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-adbreboot-action-properties-adbreboot-action-properties-to-state.md))

### to_state Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value          | Explanation |
| :------------- | :---------- |
| `"recovery"`   |             |
| `"system"`     |             |
| `"bootloader"` |             |
