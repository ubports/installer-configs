# fastboot:set_active action Schema

```txt
v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/16/properties/fastboot:set_active
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [device.schema.json*](../device.schema.json "open original schema") |

## fastboot:set_active Type

`object` ([fastboot:set_active action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-fastbootset_active-action-properties-fastbootset_active-action.md))

# fastboot:set_active Properties

| Property      | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                                                                                                              |
| :------------ | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [slot](#slot) | `string` | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-fastbootset_active-action-properties-fastbootset_active-action-properties-to-state.md "v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/16/properties/fastboot:set_active/properties/slot") |

## slot



`slot`

*   is optional

*   Type: `string` ([To state](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-fastbootset_active-action-properties-fastbootset_active-action-properties-to-state.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-fastbootset_active-action-properties-fastbootset_active-action-properties-to-state.md "v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/16/properties/fastboot:set_active/properties/slot")

### slot Type

`string` ([To state](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-fastbootset_active-action-properties-fastbootset_active-action-properties-to-state.md))

### slot Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value | Explanation |
| :---- | :---------- |
| `"a"` |             |
| `"b"` |             |
