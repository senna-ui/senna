# sen-text



<!-- Auto Generated Below -->


## Usage

### Align

```html
<sen-text align="right">Right aligned text.</sen-text>
<sen-text align="center">Center aligned text.</sen-text>
<sen-text align="justify">Justify aligned text.</sen-text>
```


### Letter-spacing

```html
<sen-text>normal letter spacing</sen-text>
<sen-text letter-spacing="1px">1px letter spacing</sen-text>
```


### Tags

```html
<sen-text>Element default is a p element</sen-text>
<sen-text tag="p">Element p</sen-text>
<sen-text tag="h1">Element h1</sen-text>
<sen-text tag="h2">Element h2</sen-text>
<sen-text tag="h3">Element h3</sen-text>
<sen-text tag="h4">Element h4</sen-text>
<sen-text tag="h5">Element h5</sen-text>
<sen-text tag="h6">Element h6</sen-text>
```


### Text-transform

```html
<sen-text>normal Text transform</sen-text>
<sen-text text-transform="capitalize">capitalize Text transform</sen-text>
<sen-text text-transform="uppercase">uppercase Text transform</sen-text>
<sen-text text-transform="lowercase">lowercase Text transform</sen-text>
<sen-text text-transform="full-width">full-width Text transform</sen-text>
```


### Weight

```html
<sen-text weight="light" kind="p">Element p light</sen-text>
<sen-text weight="regular" kind="p">Element p regular</sen-text>
<sen-text weight="bold" kind="p">Element p bold</sen-text>
```



## Properties

| Property        | Attribute        | Description                                                                       | Type                                                                   | Default     |
| --------------- | ---------------- | --------------------------------------------------------------------------------- | ---------------------------------------------------------------------- | ----------- |
| `align`         | `align`          | [Text align](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)         | `"center" \| "justify" \| "left" \| "right"`                           | `"left"`    |
| `letterSpacing` | `letter-spacing` | [Leter spacing](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing)  | `string`                                                               | `"normal"`  |
| `tag`           | `tag`            | Element Tag                                                                       | `"h1" \| "h2" \| "h3" \| "h4" \| "h5" \| "h6" \| "p"`                  | `'p'`       |
| `textTransform` | `text-transform` | [Text transform](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform) | `"capitalize" \| "full-width" \| "lowercase" \| "none" \| "uppercase"` | `"none"`    |
| `weight`        | `weight`         | Font weight                                                                       | `"bold" \| "light" \| "regular"`                                       | `"regular"` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
