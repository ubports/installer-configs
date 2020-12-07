# Remote values Schema

```txt
v2/schema/options.schema.yml#/properties/operating_systems/items/properties/options/items/properties/remote_values
```

If the values can be generated from a remote source like the systemimage api, this provides the required information for that.


| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                           |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | -------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [device.schema.json\*](../device.schema.json "open original schema") |

## remote_values Type

`object` ([Remote values](device-properties-operating-systems-operating-system-properties-options-option-properties-remote-values.md))

# Remote values Properties

| Property      | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                        |
| :------------ | -------- | -------- | -------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type) | `string` | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-options-option-properties-remote-values-properties-remote-value.md "v2/schema/options.schema.yml#/properties/operating_systems/items/properties/options/items/properties/remote_values/properties/type") |

## type




`type`

-   is optional
-   Type: `string` ([Remote value](device-properties-operating-systems-operating-system-properties-options-option-properties-remote-values-properties-remote-value.md))
-   cannot be null
-   defined in: [Device](device-properties-operating-systems-operating-system-properties-options-option-properties-remote-values-properties-remote-value.md "v2/schema/options.schema.yml#/properties/operating_systems/items/properties/options/items/properties/remote_values/properties/type")

### type Type

`string` ([Remote value](device-properties-operating-systems-operating-system-properties-options-option-properties-remote-values-properties-remote-value.md))

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                   | Explanation |
| :---------------------- | ----------- |
| `"systemimagechannels"` |             |
