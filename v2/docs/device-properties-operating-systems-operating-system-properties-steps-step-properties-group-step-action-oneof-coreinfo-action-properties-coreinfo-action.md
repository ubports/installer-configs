# core:info action Schema

```txt
v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/1/properties/core:info
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [device.schema.json*](../device.schema.json "open original schema") |

## core:info Type

`object` ([core:info action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coreinfo-action-properties-coreinfo-action.md))

# core:info Properties

| Property              | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                                                                                             |
| :-------------------- | :-------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [status](#status)     | `string`  | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coreinfo-action-properties-coreinfo-action-properties-status-message.md "v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/1/properties/core:info/properties/status")       |
| [dots](#dots)         | `boolean` | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coreinfo-action-properties-coreinfo-action-properties-dots-waiting-animation.md "v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/1/properties/core:info/properties/dots") |
| [info](#info)         | `string`  | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coreinfo-action-properties-coreinfo-action-properties-info-message.md "v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/1/properties/core:info/properties/info")           |
| [progress](#progress) | `number`  | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coreinfo-action-properties-coreinfo-action-properties-progress.md "v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/1/properties/core:info/properties/progress")           |
| [speed](#speed)       | `number`  | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coreinfo-action-properties-coreinfo-action-properties-speed.md "v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/1/properties/core:info/properties/speed")                 |

## status

Message displayed in the upper line of the footer

`status`

*   is optional

*   Type: `string` ([Status message](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coreinfo-action-properties-coreinfo-action-properties-status-message.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coreinfo-action-properties-coreinfo-action-properties-status-message.md "v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/1/properties/core:info/properties/status")

### status Type

`string` ([Status message](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coreinfo-action-properties-coreinfo-action-properties-status-message.md))

## dots

Dots (waiting animation) in the upper line of the footer

`dots`

*   is optional

*   Type: `boolean` ([Dots (waiting animation)](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coreinfo-action-properties-coreinfo-action-properties-dots-waiting-animation.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coreinfo-action-properties-coreinfo-action-properties-dots-waiting-animation.md "v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/1/properties/core:info/properties/dots")

### dots Type

`boolean` ([Dots (waiting animation)](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coreinfo-action-properties-coreinfo-action-properties-dots-waiting-animation.md))

## info

Message displayed in the lower line of the footer

`info`

*   is optional

*   Type: `string` ([Info message](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coreinfo-action-properties-coreinfo-action-properties-info-message.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coreinfo-action-properties-coreinfo-action-properties-info-message.md "v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/1/properties/core:info/properties/info")

### info Type

`string` ([Info message](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coreinfo-action-properties-coreinfo-action-properties-info-message.md))

## progress

Progress bar (omit to hide)

`progress`

*   is optional

*   Type: `number` ([Progress](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coreinfo-action-properties-coreinfo-action-properties-progress.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coreinfo-action-properties-coreinfo-action-properties-progress.md "v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/1/properties/core:info/properties/progress")

### progress Type

`number` ([Progress](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coreinfo-action-properties-coreinfo-action-properties-progress.md))

### progress Constraints

**maximum**: the value of this number must smaller than or equal to: `1`

**minimum**: the value of this number must greater than or equal to: `0`

## speed

speed in MB/s (omit to hide)

`speed`

*   is optional

*   Type: `number` ([Speed](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coreinfo-action-properties-coreinfo-action-properties-speed.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coreinfo-action-properties-coreinfo-action-properties-speed.md "v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/1/properties/core:info/properties/speed")

### speed Type

`number` ([Speed](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-coreinfo-action-properties-coreinfo-action-properties-speed.md))

### speed Constraints

**maximum**: the value of this number must smaller than or equal to: `5000`

**minimum**: the value of this number must greater than or equal to: `0`
