# Remote values Schema

```txt
v2/schema/options.schema.yml#/properties/operating_systems/items/properties/options/items/properties/remote_values
```

If the values can be generated from a remote source like the systemimage api, this provides the required information for that.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [device.schema.json*](../device.schema.json "open original schema") |

## remote_values Type

`object` ([Remote values](device-properties-operating-systems-operating-system-properties-options-option-properties-remote-values.md))

## remote_values Constraints

**maximum number of properties**: the maximum number of properties for this object is: `1`

# remote_values Properties

| Property                                     | Type          | Required | Nullable    | Defined by                                                                                                                                                                                                                                                                                               |
| :------------------------------------------- | :------------ | :------- | :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [systemimage:channels](#systemimagechannels) | Not specified | Optional | can be null | [Device](device-properties-operating-systems-operating-system-properties-options-option-properties-remote-values-properties-systemimagechannels.md "v2/schema/options.schema.yml#/properties/operating_systems/items/properties/options/items/properties/remote_values/properties/systemimage:channels") |
| [asteroid_os:channels](#asteroid_oschannels) | Not specified | Optional | can be null | [Device](device-properties-operating-systems-operating-system-properties-options-option-properties-remote-values-properties-asteroid_oschannels.md "v2/schema/options.schema.yml#/properties/operating_systems/items/properties/options/items/properties/remote_values/properties/asteroid_os:channels") |

## systemimage:channels



`systemimage:channels`

*   is optional

*   Type: `null`, the value must be null

*   can be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-options-option-properties-remote-values-properties-systemimagechannels.md "v2/schema/options.schema.yml#/properties/operating_systems/items/properties/options/items/properties/remote_values/properties/systemimage:channels")

### systemimage:channels Type

`null`, the value must be null

## asteroid_os:channels



`asteroid_os:channels`

*   is optional

*   Type: `null`, the value must be null

*   can be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-options-option-properties-remote-values-properties-asteroid_oschannels.md "v2/schema/options.schema.yml#/properties/operating_systems/items/properties/options/items/properties/remote_values/properties/asteroid_os:channels")

### asteroid_os:channels Type

`null`, the value must be null
