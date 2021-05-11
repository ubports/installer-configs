# Image Schema

```txt
v2/schema/user_actions.schema.yml#/properties/user_actions/patternProperties/\w/properties/image
```

String referring to a picture in the installer.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [device.schema.json*](../device.schema.json "open original schema") |

## image Type

`string` ([Image](device-properties-user-actions-patternproperties-user-action-properties-image.md))

## image Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                | Explanation |
| :------------------- | :---------- |
| `"phone_power_up"`   |             |
| `"phone_power_down"` |             |
