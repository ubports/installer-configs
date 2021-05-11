# Partition type Schema

```txt
v2/schema/action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/oneOf/14/properties/fastboot:format/properties/type
```

Partition type to use

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [device.schema.json*](../device.schema.json "open original schema") |

## type Type

`string` ([Partition type](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-oneof-fastbootformat-action-properties-fastbootformat-action-properties-partition-type.md))

## type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value    | Explanation |
| :------- | :---------- |
| `"ext2"` |             |
| `"ext4"` |             |
