# Formfactor Schema

```txt
v2/schema/formfactor.schema.yml#/properties/formfactor
```

What kind of device is it?

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [device.schema.json*](../device.schema.json "open original schema") |

## formfactor Type

`string` ([Formfactor](device-properties-formfactor.md))

## formfactor Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value        | Explanation |
| :----------- | :---------- |
| `"computer"` |             |
| `"laptop"`   |             |
| `"phone"`    |             |
| `"tablet"`   |             |
| `"watch"`    |             |
