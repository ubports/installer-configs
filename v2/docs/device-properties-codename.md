# Codename Schema

```txt
v2/schema/device.schema.yml#/properties/codename
```

A short codename that is used internally to identify the device. This (with the extension '.yml') should also be the filename. If there are multiple codenames in use for the exact same device, only create a single one with the most prominent one and add the correct aliases to aliases.json.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [device.schema.json*](../device.schema.json "open original schema") |

## codename Type

`string` ([Codename](device-properties-codename.md))
