# Slide Schema

```txt
v2/schema/operating_systems.schema.yml#/properties/operating_systems/items/properties/slideshow/items
```

Slide about the operating system

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [device.schema.json*](../device.schema.json "open original schema") |

## items Type

`object` ([Slide](device-properties-operating-systems-operating-system-properties-slideshow-slide.md))

# items Properties

| Property        | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                   |
| :-------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [title](#title) | `string` | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-slideshow-slide-properties-slide-title.md "v2/schema/operating_systems.schema.yml#/properties/operating_systems/items/properties/slideshow/items/properties/title") |
| [text](#text)   | `string` | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-slideshow-slide-properties-slide-text.md "v2/schema/operating_systems.schema.yml#/properties/operating_systems/items/properties/slideshow/items/properties/text")   |
| [image](#image) | `string` | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-slideshow-slide-properties-slide-image.md "v2/schema/operating_systems.schema.yml#/properties/operating_systems/items/properties/slideshow/items/properties/image") |

## title

Title of the slide

`title`

*   is optional

*   Type: `string` ([Slide title](device-properties-operating-systems-operating-system-properties-slideshow-slide-properties-slide-title.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-slideshow-slide-properties-slide-title.md "v2/schema/operating_systems.schema.yml#/properties/operating_systems/items/properties/slideshow/items/properties/title")

### title Type

`string` ([Slide title](device-properties-operating-systems-operating-system-properties-slideshow-slide-properties-slide-title.md))

## text

Text body of the slide, Markdown supported here.

`text`

*   is optional

*   Type: `string` ([Slide text](device-properties-operating-systems-operating-system-properties-slideshow-slide-properties-slide-text.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-slideshow-slide-properties-slide-text.md "v2/schema/operating_systems.schema.yml#/properties/operating_systems/items/properties/slideshow/items/properties/text")

### text Type

`string` ([Slide text](device-properties-operating-systems-operating-system-properties-slideshow-slide-properties-slide-text.md))

## image

Image displayed on the slide.

`image`

*   is optional

*   Type: `string` ([Slide image](device-properties-operating-systems-operating-system-properties-slideshow-slide-properties-slide-image.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-slideshow-slide-properties-slide-image.md "v2/schema/operating_systems.schema.yml#/properties/operating_systems/items/properties/slideshow/items/properties/image")

### image Type

`string` ([Slide image](device-properties-operating-systems-operating-system-properties-slideshow-slide-properties-slide-image.md))
