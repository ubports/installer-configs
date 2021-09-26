# Handlers Schema

```txt
v2/schema/device.schema.yml#/properties/handlers
```

Steps to run to handle specific known errors

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [device.schema.json*](../device.schema.json "open original schema") |

## handlers Type

`object` ([Handlers](device-properties-handlers.md))

# handlers Properties

| Property                                | Type     | Required | Nullable       | Defined by                                                                                                                                                            |
| :-------------------------------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [bootloader_locked](#bootloader_locked) | `object` | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step.md "v2/schema/step.schema.yml#/properties/handlers/properties/bootloader_locked") |

## bootloader_locked

Installation step.

`bootloader_locked`

*   is optional

*   Type: `object` ([Step](device-properties-operating-systems-operating-system-properties-steps-step.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step.md "v2/schema/step.schema.yml#/properties/handlers/properties/bootloader_locked")

### bootloader_locked Type

`object` ([Step](device-properties-operating-systems-operating-system-properties-steps-step.md))
