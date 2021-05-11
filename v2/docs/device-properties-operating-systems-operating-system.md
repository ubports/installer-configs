# Operating system Schema

```txt
v2/schema/operating_systems.schema.yml#/properties/operating_systems/items
```

An operating system available for installation

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [device.schema.json*](../device.schema.json "open original schema") |

## items Type

`object` ([Operating system](device-properties-operating-systems-operating-system.md))

# items Properties

| Property                        | Type     | Required | Nullable       | Defined by                                                                                                                                                                                       |
| :------------------------------ | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name)                   | `string` | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-os-name.md "v2/schema/operating_systems.schema.yml#/properties/operating_systems/items/properties/name")                |
| [options](#options)             | `array`  | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-options.md "v2/schema/options.schema.yml#/properties/operating_systems/items/properties/options")                       |
| [prerequisites](#prerequisites) | `array`  | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-prerequisites.md "v2/schema/operating_systems.schema.yml#/properties/operating_systems/items/properties/prerequisites") |
| [steps](#steps)                 | `array`  | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps.md "v2/schema/operating_systems.schema.yml#/properties/operating_systems/items/properties/steps")                 |
| [eula](#eula)                   | `object` | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-eula.md "v2/schema/operating_systems.schema.yml#/properties/operating_systems/items/properties/eula")                   |
| [slideshow](#slideshow)         | `array`  | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-slideshow.md "v2/schema/operating_systems.schema.yml#/properties/operating_systems/items/properties/slideshow")         |
| [video](#video)                 | `string` | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-video.md "v2/schema/operating_systems.schema.yml#/properties/operating_systems/items/properties/video")                 |
| [donate](#donate)               | `string` | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-donate.md "v2/schema/operating_systems.schema.yml#/properties/operating_systems/items/properties/donate")               |
| [get_involved](#get_involved)   | `string` | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-get_involved.md "v2/schema/operating_systems.schema.yml#/properties/operating_systems/items/properties/get_involved")   |

## name

Human-readable name of the operating system.

`name`

*   is optional

*   Type: `string` ([OS name](device-properties-operating-systems-operating-system-properties-os-name.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-os-name.md "v2/schema/operating_systems.schema.yml#/properties/operating_systems/items/properties/name")

### name Type

`string` ([OS name](device-properties-operating-systems-operating-system-properties-os-name.md))

## options

Options for the installation.

`options`

*   is optional

*   Type: `object[]` ([Option](device-properties-operating-systems-operating-system-properties-options-option.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-options.md "v2/schema/options.schema.yml#/properties/operating_systems/items/properties/options")

### options Type

`object[]` ([Option](device-properties-operating-systems-operating-system-properties-options-option.md))

## prerequisites

An array of strings referring to user_actions defined above that are needed before the installation. This should not include the steps from the generic unlock block, but actions specific to the installation of this operating system.

`prerequisites`

*   is optional

*   Type: `string[]`

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-prerequisites.md "v2/schema/operating_systems.schema.yml#/properties/operating_systems/items/properties/prerequisites")

### prerequisites Type

`string[]`

## steps

An ordered array of objects describing steps required to install the operating system.

`steps`

*   is optional

*   Type: `object[]` ([Step](device-properties-operating-systems-operating-system-properties-steps-step.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps.md "v2/schema/operating_systems.schema.yml#/properties/operating_systems/items/properties/steps")

### steps Type

`object[]` ([Step](device-properties-operating-systems-operating-system-properties-steps-step.md))

## eula

An end-user license agreement

`eula`

*   is optional

*   Type: `object` ([EULA](device-properties-operating-systems-operating-system-properties-eula.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-eula.md "v2/schema/operating_systems.schema.yml#/properties/operating_systems/items/properties/eula")

### eula Type

`object` ([EULA](device-properties-operating-systems-operating-system-properties-eula.md))

## slideshow

An array of slides presenting the operating system's most compelling features.

`slideshow`

*   is optional

*   Type: `object[]` ([Slide](device-properties-operating-systems-operating-system-properties-slideshow-slide.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-slideshow.md "v2/schema/operating_systems.schema.yml#/properties/operating_systems/items/properties/slideshow")

### slideshow Type

`object[]` ([Slide](device-properties-operating-systems-operating-system-properties-slideshow-slide.md))

## video

A video introducing the user to the operating system they just installed.

`video`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-video.md "v2/schema/operating_systems.schema.yml#/properties/operating_systems/items/properties/video")

### video Type

`string`

## donate

A link to donate to the developer of the operating system.

`donate`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-donate.md "v2/schema/operating_systems.schema.yml#/properties/operating_systems/items/properties/donate")

### donate Type

`string`

## get_involved

A link to the OSs get involved page.

`get_involved`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-get_involved.md "v2/schema/operating_systems.schema.yml#/properties/operating_systems/items/properties/get_involved")

### get_involved Type

`string`
