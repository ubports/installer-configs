# Untitled string in Device Schema

```txt
v2/schema/options.schema.yml#/properties/operating_systems/items/properties/options/items/properties/type
```

Describes what values are accepted by the setting and how they are provided.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [device.schema.json*](../device.schema.json "open original schema") |

## type Type

`string`

## type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value        | Explanation |
| :----------- | :---------- |
| `"checkbox"` |             |
| `"input"`    |             |
| `"select"`   |             |
