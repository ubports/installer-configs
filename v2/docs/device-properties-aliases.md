# Aliases Schema

```txt
v2/schema/device.schema.yml#/properties/aliases
```

Alternative codenames this device might be identified as.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [device.schema.json*](../device.schema.json "open original schema") |

## aliases Type

`string[]`

## aliases Constraints

**unique items**: all items in this array must be unique. Duplicates are not allowed.
