# User actions Schema

```txt
v2/schema/user_actions.schema.yml#/properties/user_actions
```

Object that contains instructions for the user for later reference.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Forbidden             | none                | [device.schema.json*](../device.schema.json "open original schema") |

## user_actions Type

`object` ([User actions](device-properties-user-actions.md))

# user_actions Properties

| Property | Type     | Required | Nullable       | Defined by                                                                                                                                                  |
| :------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `\w`     | `object` | Optional | cannot be null | [Device](device-properties-user-actions-patternproperties-user-action.md "v2/schema/user_actions.schema.yml#/properties/user_actions/patternProperties/\w") |

## Pattern: `\w`

Instruction that can be referenced and presented to the user. Eg key combinations to reboot to recovery or bootloader.

`\w`

*   is optional

*   Type: `object` ([User action](device-properties-user-actions-patternproperties-user-action.md))

*   cannot be null

*   defined in: [Device](device-properties-user-actions-patternproperties-user-action.md "v2/schema/user_actions.schema.yml#/properties/user_actions/patternProperties/\w")

### \w Type

`object` ([User action](device-properties-user-actions-patternproperties-user-action.md))
