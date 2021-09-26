# Operating systems Schema

```txt
v2/schema/operating_systems.schema.yml#/properties/operating_systems
```

An array of objects describing operating systems available for installation.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [device.schema.json*](../device.schema.json "open original schema") |

## operating_systems Type

`object[]` ([Operating system](device-properties-operating-systems-operating-system.md))

## operating_systems Constraints

**unique items**: all items in this array must be unique. Duplicates are not allowed.
