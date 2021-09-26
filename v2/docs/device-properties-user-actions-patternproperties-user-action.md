# User action Schema

```txt
v2/schema/user_actions.schema.yml#/properties/user_actions/patternProperties/\w
```

Instruction that can be referenced and presented to the user. Eg key combinations to reboot to recovery or bootloader.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [device.schema.json*](../device.schema.json "open original schema") |

## \w Type

`object` ([User action](device-properties-user-actions-patternproperties-user-action.md))

# \w Properties

| Property                    | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                |
| :-------------------------- | :-------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [title](#title)             | `string`  | Required | cannot be null | [Device](device-properties-user-actions-patternproperties-user-action-properties-title.md "v2/schema/user_actions.schema.yml#/properties/user_actions/patternProperties/\w/properties/title")             |
| [description](#description) | `string`  | Required | cannot be null | [Device](device-properties-user-actions-patternproperties-user-action-properties-description.md "v2/schema/user_actions.schema.yml#/properties/user_actions/patternProperties/\w/properties/description") |
| [image](#image)             | `string`  | Optional | cannot be null | [Device](device-properties-user-actions-patternproperties-user-action-properties-image.md "v2/schema/user_actions.schema.yml#/properties/user_actions/patternProperties/\w/properties/image")             |
| [button](#button)           | `boolean` | Optional | cannot be null | [Device](device-properties-user-actions-patternproperties-user-action-properties-button.md "v2/schema/user_actions.schema.yml#/properties/user_actions/patternProperties/\w/properties/button")           |
| [link](#link)               | `string`  | Optional | cannot be null | [Device](device-properties-user-actions-patternproperties-user-action-properties-link.md "v2/schema/user_actions.schema.yml#/properties/user_actions/patternProperties/\w/properties/link")               |

## title

Identifier of the step. Eg. 'Enable USB-debugging'

`title`

*   is required

*   Type: `string` ([Title](device-properties-user-actions-patternproperties-user-action-properties-title.md))

*   cannot be null

*   defined in: [Device](device-properties-user-actions-patternproperties-user-action-properties-title.md "v2/schema/user_actions.schema.yml#/properties/user_actions/patternProperties/\w/properties/title")

### title Type

`string` ([Title](device-properties-user-actions-patternproperties-user-action-properties-title.md))

## description

Short description of the step. For simple tasks, the full instructions can be put here.

`description`

*   is required

*   Type: `string` ([Description](device-properties-user-actions-patternproperties-user-action-properties-description.md))

*   cannot be null

*   defined in: [Device](device-properties-user-actions-patternproperties-user-action-properties-description.md "v2/schema/user_actions.schema.yml#/properties/user_actions/patternProperties/\w/properties/description")

### description Type

`string` ([Description](device-properties-user-actions-patternproperties-user-action-properties-description.md))

## image

String referring to a picture in the installer.

`image`

*   is optional

*   Type: `string` ([Image](device-properties-user-actions-patternproperties-user-action-properties-image.md))

*   cannot be null

*   defined in: [Device](device-properties-user-actions-patternproperties-user-action-properties-image.md "v2/schema/user_actions.schema.yml#/properties/user_actions/patternProperties/\w/properties/image")

### image Type

`string` ([Image](device-properties-user-actions-patternproperties-user-action-properties-image.md))

### image Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                | Explanation |
| :------------------- | :---------- |
| `"phone_power_up"`   |             |
| `"phone_power_down"` |             |

## button

Specify whether there should be a done-button displayed.

`button`

*   is optional

*   Type: `boolean` ([Button](device-properties-user-actions-patternproperties-user-action-properties-button.md))

*   cannot be null

*   defined in: [Device](device-properties-user-actions-patternproperties-user-action-properties-button.md "v2/schema/user_actions.schema.yml#/properties/user_actions/patternProperties/\w/properties/button")

### button Type

`boolean` ([Button](device-properties-user-actions-patternproperties-user-action-properties-button.md))

## link

A link to a more extensive tutorial.

`link`

*   is optional

*   Type: `string` ([Link](device-properties-user-actions-patternproperties-user-action-properties-link.md))

*   cannot be null

*   defined in: [Device](device-properties-user-actions-patternproperties-user-action-properties-link.md "v2/schema/user_actions.schema.yml#/properties/user_actions/patternProperties/\w/properties/link")

### link Type

`string` ([Link](device-properties-user-actions-patternproperties-user-action-properties-link.md))
