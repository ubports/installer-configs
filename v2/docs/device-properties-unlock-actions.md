# Unlock actions Schema

```txt
v2/schema/device.schema.yml#/properties/unlock
```

An array of strings referring to user_actions defined above that are needed to unlock the device. This might include simple things like enabling adb access or bigger steps like using a leaked oem tool to flash highly questionable images that unlock the bootloader. Whatever is needed to make installations possible.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [device.schema.json*](../device.schema.json "open original schema") |

## unlock Type

`string[]`

## unlock Constraints

**unique items**: all items in this array must be unique. Duplicates are not allowed.
