# Option Schema

```txt
v2/schema/options.schema.yml#/properties/operating_systems/items/properties/options/items
```

Option for the installation.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [device.schema.json*](../device.schema.json "open original schema") |

## items Type

`object` ([Option](device-properties-operating-systems-operating-system-properties-options-option.md))

# items Properties

| Property                        | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                                                |
| :------------------------------ | :------------ | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [var](#var)                     | `string`      | Required | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-options-option-properties-var.md "v2/schema/options.schema.yml#/properties/operating_systems/items/properties/options/items/properties/var")                     |
| [name](#name)                   | `string`      | Required | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-options-option-properties-name.md "v2/schema/options.schema.yml#/properties/operating_systems/items/properties/options/items/properties/name")                   |
| [tooltip](#tooltip)             | `string`      | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-options-option-properties-tooltip.md "v2/schema/options.schema.yml#/properties/operating_systems/items/properties/options/items/properties/tooltip")             |
| [link](#link)                   | `string`      | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-options-option-properties-link.md "v2/schema/options.schema.yml#/properties/operating_systems/items/properties/options/items/properties/link")                   |
| [type](#type)                   | `string`      | Required | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-options-option-properties-type.md "v2/schema/options.schema.yml#/properties/operating_systems/items/properties/options/items/properties/type")                   |
| [remote_values](#remote_values) | `object`      | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-options-option-properties-remote-values.md "v2/schema/options.schema.yml#/properties/operating_systems/items/properties/options/items/properties/remote_values") |
| [value](#value)                 | Not specified | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-options-option-properties-value.md "v2/schema/options.schema.yml#/properties/operating_systems/items/properties/options/items/properties/value")                 |
| [values](#values)               | `array`       | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-options-option-properties-values.md "v2/schema/options.schema.yml#/properties/operating_systems/items/properties/options/items/properties/values")               |

## var

Variable the setting will be stored in.

`var`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-options-option-properties-var.md "v2/schema/options.schema.yml#/properties/operating_systems/items/properties/options/items/properties/var")

### var Type

`string`

## name

Human-readable identifier of the setting.

`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-options-option-properties-name.md "v2/schema/options.schema.yml#/properties/operating_systems/items/properties/options/items/properties/name")

### name Type

`string`

## tooltip

A very short help text describing the setting.

`tooltip`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-options-option-properties-tooltip.md "v2/schema/options.schema.yml#/properties/operating_systems/items/properties/options/items/properties/tooltip")

### tooltip Type

`string`

## link

A link to the docs describing the setting.

`link`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-options-option-properties-link.md "v2/schema/options.schema.yml#/properties/operating_systems/items/properties/options/items/properties/link")

### link Type

`string`

## type

Describes what values are accepted by the setting and how they are provided.

`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-options-option-properties-type.md "v2/schema/options.schema.yml#/properties/operating_systems/items/properties/options/items/properties/type")

### type Type

`string`

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value        | Explanation |
| :----------- | :---------- |
| `"checkbox"` |             |
| `"input"`    |             |
| `"select"`   |             |

## remote_values

If the values can be generated from a remote source like the systemimage api, this provides the required information for that.

`remote_values`

*   is optional

*   Type: `object` ([Remote values](device-properties-operating-systems-operating-system-properties-options-option-properties-remote-values.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-options-option-properties-remote-values.md "v2/schema/options.schema.yml#/properties/operating_systems/items/properties/options/items/properties/remote_values")

### remote_values Type

`object` ([Remote values](device-properties-operating-systems-operating-system-properties-options-option-properties-remote-values.md))

### remote_values Constraints

**maximum number of properties**: the maximum number of properties for this object is: `1`

## value

Default value of the option

`value`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-options-option-properties-value.md "v2/schema/options.schema.yml#/properties/operating_systems/items/properties/options/items/properties/value")

### value Type

unknown

## values

List of values for the select.

`values`

*   is optional

*   Type: `array` ([Values](device-properties-operating-systems-operating-system-properties-options-option-properties-values.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-options-option-properties-values.md "v2/schema/options.schema.yml#/properties/operating_systems/items/properties/options/items/properties/values")

### values Type

`array` ([Values](device-properties-operating-systems-operating-system-properties-options-option-properties-values.md))
