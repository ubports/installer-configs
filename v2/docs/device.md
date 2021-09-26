# Device Schema

```txt
v2/schema/device.schema.yml
```

Device configuration for the UBports Installer

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                         |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [device.schema.json](../device.schema.json "open original schema") |

## Device Type

`object` ([Device](device.md))

# Device Properties

| Property                                | Type     | Required | Nullable       | Defined by                                                                                                              |
| :-------------------------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------- |
| [name](#name)                           | `string` | Required | cannot be null | [Device](device-properties-name.md "v2/schema/device.schema.yml#/properties/name")                                      |
| [codename](#codename)                   | `string` | Required | cannot be null | [Device](device-properties-codename.md "v2/schema/device.schema.yml#/properties/codename")                              |
| [formfactor](#formfactor)               | `string` | Required | cannot be null | [Device](device-properties-formfactor.md "v2/schema/formfactor.schema.yml#/properties/formfactor")                      |
| [aliases](#aliases)                     | `array`  | Optional | cannot be null | [Device](device-properties-aliases.md "v2/schema/device.schema.yml#/properties/aliases")                                |
| [doppelgangers](#doppelgangers)         | `array`  | Optional | cannot be null | [Device](device-properties-doppelgangers.md "v2/schema/device.schema.yml#/properties/doppelgangers")                    |
| [user_actions](#user_actions)           | `object` | Optional | cannot be null | [Device](device-properties-user-actions.md "v2/schema/user_actions.schema.yml#/properties/user_actions")                |
| [handlers](#handlers)                   | `object` | Optional | cannot be null | [Device](device-properties-handlers.md "v2/schema/device.schema.yml#/properties/handlers")                              |
| [unlock](#unlock)                       | `array`  | Optional | cannot be null | [Device](device-properties-unlock-actions.md "v2/schema/device.schema.yml#/properties/unlock")                          |
| [operating_systems](#operating_systems) | `array`  | Required | cannot be null | [Device](device-properties-operating-systems.md "v2/schema/operating_systems.schema.yml#/properties/operating_systems") |

## name

The human-readable name under which the device was marketed. This includes the name of the manufacturer if it makes sense. I.e. you would not refer to the 'Oneplus One' as 'One', but you would not call the 'iPhone 9' 'Apple iPhone 9'. Use common sense.

`name`

*   is required

*   Type: `string` ([Name](device-properties-name.md))

*   cannot be null

*   defined in: [Device](device-properties-name.md "v2/schema/device.schema.yml#/properties/name")

### name Type

`string` ([Name](device-properties-name.md))

## codename

A short codename that is used internally to identify the device. This (with the extension '.yml') should also be the filename. If there are multiple codenames in use for the exact same device, only create a single one with the most prominent one and add the correct aliases to aliases.json.

`codename`

*   is required

*   Type: `string` ([Codename](device-properties-codename.md))

*   cannot be null

*   defined in: [Device](device-properties-codename.md "v2/schema/device.schema.yml#/properties/codename")

### codename Type

`string` ([Codename](device-properties-codename.md))

## formfactor

What kind of device is it?

`formfactor`

*   is required

*   Type: `string` ([Formfactor](device-properties-formfactor.md))

*   cannot be null

*   defined in: [Device](device-properties-formfactor.md "v2/schema/formfactor.schema.yml#/properties/formfactor")

### formfactor Type

`string` ([Formfactor](device-properties-formfactor.md))

### formfactor Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value        | Explanation |
| :----------- | :---------- |
| `"computer"` |             |
| `"laptop"`   |             |
| `"phone"`    |             |
| `"tablet"`   |             |
| `"watch"`    |             |

## aliases

Alternative codenames this device might be identified as.

`aliases`

*   is optional

*   Type: `string[]`

*   cannot be null

*   defined in: [Device](device-properties-aliases.md "v2/schema/device.schema.yml#/properties/aliases")

### aliases Type

`string[]`

### aliases Constraints

**unique items**: all items in this array must be unique. Duplicates are not allowed.

## doppelgangers

Codenames of devices this device should not be confused with.

`doppelgangers`

*   is optional

*   Type: `string[]`

*   cannot be null

*   defined in: [Device](device-properties-doppelgangers.md "v2/schema/device.schema.yml#/properties/doppelgangers")

### doppelgangers Type

`string[]`

### doppelgangers Constraints

**unique items**: all items in this array must be unique. Duplicates are not allowed.

## user_actions

Object that contains instructions for the user for later reference.

`user_actions`

*   is optional

*   Type: `object` ([User actions](device-properties-user-actions.md))

*   cannot be null

*   defined in: [Device](device-properties-user-actions.md "v2/schema/user_actions.schema.yml#/properties/user_actions")

### user_actions Type

`object` ([User actions](device-properties-user-actions.md))

## handlers

Steps to run to handle specific known errors

`handlers`

*   is optional

*   Type: `object` ([Handlers](device-properties-handlers.md))

*   cannot be null

*   defined in: [Device](device-properties-handlers.md "v2/schema/device.schema.yml#/properties/handlers")

### handlers Type

`object` ([Handlers](device-properties-handlers.md))

## unlock

An array of strings referring to user_actions defined above that are needed to unlock the device. This might include simple things like enabling adb access or bigger steps like using a leaked oem tool to flash highly questionable images that unlock the bootloader. Whatever is needed to make installations possible.

`unlock`

*   is optional

*   Type: `string[]`

*   cannot be null

*   defined in: [Device](device-properties-unlock-actions.md "v2/schema/device.schema.yml#/properties/unlock")

### unlock Type

`string[]`

### unlock Constraints

**unique items**: all items in this array must be unique. Duplicates are not allowed.

## operating_systems

An array of objects describing operating systems available for installation.

`operating_systems`

*   is required

*   Type: `object[]` ([Operating system](device-properties-operating-systems-operating-system.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems.md "v2/schema/operating_systems.schema.yml#/properties/operating_systems")

### operating_systems Type

`object[]` ([Operating system](device-properties-operating-systems-operating-system.md))

### operating_systems Constraints

**unique items**: all items in this array must be unique. Duplicates are not allowed.
