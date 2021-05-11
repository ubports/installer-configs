# Step Schema

```txt
v2/schema/step.schema.yml#/properties/handlers/properties/bootloader_locked
```

Installation step.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [device.schema.json*](../device.schema.json "open original schema") |

## bootloader_locked Type

`object` ([Step](device-properties-operating-systems-operating-system-properties-steps-step.md))

# bootloader_locked Properties

| Property                | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                                   |
| :---------------------- | :------------ | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [actions](#actions)     | `array`       | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step.md "v2/schema/step.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions")      |
| [fallback](#fallback)   | `array`       | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-fallback-steps.md "v2/schema/step.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/fallback") |
| [optional](#optional)   | `boolean`     | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-optional.md "v2/schema/step.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/optional")       |
| [condition](#condition) | Not specified | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-condition.md "v2/schema/step.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/condition")     |

## actions



`actions`

*   is optional

*   Type: `object[]` ([Action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step.md "v2/schema/step.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions")

### actions Type

`object[]` ([Action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action.md))

## fallback



`fallback`

*   is optional

*   Type: unknown\[]

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-fallback-steps.md "v2/schema/step.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/fallback")

### fallback Type

unknown\[]

## optional

If true, errors in this step will be ignored

`optional`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-optional.md "v2/schema/step.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/optional")

### optional Type

`boolean`

## condition

Query an installation option to determine if the step should be run

`condition`

*   is optional

*   Type: unknown ([Condition](device-properties-operating-systems-operating-system-properties-steps-step-properties-condition.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-condition.md "v2/schema/step.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/condition")

### condition Type

unknown ([Condition](device-properties-operating-systems-operating-system-properties-steps-step-properties-condition.md))
