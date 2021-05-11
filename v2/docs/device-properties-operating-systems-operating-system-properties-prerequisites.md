# Prerequisites Schema

```txt
v2/schema/operating_systems.schema.yml#/properties/operating_systems/items/properties/prerequisites
```

An array of strings referring to user_actions defined above that are needed before the installation. This should not include the steps from the generic unlock block, but actions specific to the installation of this operating system.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [device.schema.json*](../device.schema.json "open original schema") |

## prerequisites Type

`string[]`
