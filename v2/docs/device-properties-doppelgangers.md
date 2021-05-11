# Doppelgangers Schema

```txt
v2/schema/device.schema.yml#/properties/doppelgangers
```

Codenames of devices this device should not be confused with.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [device.schema.json*](../device.schema.json "open original schema") |

## doppelgangers Type

`string[]`

## doppelgangers Constraints

**unique items**: all items in this array must be unique. Duplicates are not allowed.
