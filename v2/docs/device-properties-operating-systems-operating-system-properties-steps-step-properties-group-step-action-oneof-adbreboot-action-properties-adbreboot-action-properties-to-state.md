# To state Schema

```txt
v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/18/properties/adb:reboot/properties/to_state
```

State to rebot to.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [device.schema.json*](../device.schema.json "open original schema") |

## to_state Type

`string` ([To state](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-adbreboot-action-properties-adbreboot-action-properties-to-state.md))

## to_state Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value          | Explanation |
| :------------- | :---------- |
| `"recovery"`   |             |
| `"system"`     |             |
| `"bootloader"` |             |
