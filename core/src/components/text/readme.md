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


## CSS Custom Properties

| Name                      | Description                                                                                             |
| ------------------------- | ------------------------------------------------------------------------------------------------------- |
| `--text-color-h1`         | set color of h1 tag - default inherits --text-font-color-base or `#211010`                              |
| `--text-color-h2`         | set color of h2 tag - default inherits --text-font-color-base or `#211010`                              |
| `--text-color-h3`         | set color of h3 tag - default inherits --text-font-color-base or `#211010`                              |
| `--text-color-h4`         | set color of h4 tag - default inherits --text-font-color-base or `#211010`                              |
| `--text-color-h5`         | set color of h5 tag - default inherits --text-font-color-base or `#211010`                              |
| `--text-color-h6`         | set color of h6 tag - default inherits --text-font-color-base or `#211010`                              |
| `--text-color-p`          | set color of p tag - default inherits --text-font-color-base or `#211010`                               |
| `--text-font-color-base`  | color of sen-text - default inherits --sen-font-color-base or `#211010`                                 |
| `--text-font-family-base` | the font family - default inherits --sen-font-family-base or `"Source Sans Pro", Helvetica, sans-serif` |
| `--text-font-family-h1`   | set font-family of h1 tag - default inherits --text-font-family-base                                    |
| `--text-font-family-h2`   | set font-family of h2 tag - default inherits --text-font-family-base                                    |
| `--text-font-family-h3`   | set font-family of h3 tag - default inherits --text-font-family-base                                    |
| `--text-font-family-h4`   | set font-family of h4 tag - default inherits --text-font-family-base                                    |
| `--text-font-family-h5`   | set font-family of h5 tag - default inherits --text-font-family-base                                    |
| `--text-font-family-h6`   | set font-family of h6 tag - default inherits --text-font-family-base                                    |
| `--text-font-family-p`    | set font-family of p tag - default inherits --text-font-family-base                                     |
| `--text-font-size-h1`     | set relative (em) size of h1 tag - default `2.6em`                                                      |
| `--text-font-size-h2`     | set relative (em) size of h2 tag - default `2.1em`                                                      |
| `--text-font-size-h3`     | set relative (em) size of h3 tag - default `1.8em`                                                      |
| `--text-font-size-h4`     | set relative (em) size of h4 tag - default `1.4em`                                                      |
| `--text-font-size-h5`     | set relative (em) size of h5 tag - default `1.2em`                                                      |
| `--text-font-size-h6`     | set relative (em) size of h6 tag - default `1.1em`                                                      |
| `--text-font-size-lg`     | responsive base font size in breakpoint lg (<1200px) - default inherits --sen-font-size-lg or `16px`    |
| `--text-font-size-md`     | responsive base font size in breakpoint md (<992px) - default inherits --sen-font-size-md or `13px`     |
| `--text-font-size-p`      | set relative (em) size of p tag - default `1em`                                                         |
| `--text-font-size-sm`     | responsive base font size in breakpoint sm (<768px) - default inherits --sen-font-size-sm or `11px`     |
| `--text-font-size-xl`     | responsive base font size in breakpoint xl (>=1200px) - default inherits --sen-font-size-xl or `16px`   |
| `--text-font-size-xs`     | responsive base font size in breakpoint xs (<576px) - default inherits --sen-font-size-xs or `11px`     |
| `--text-line-height-h1`   | set line-height of h1 tag - default `1.2`                                                               |
| `--text-line-height-h2`   | set line-height of h2 tag - default `1.3`                                                               |
| `--text-line-height-h3`   | set line-height of h3 tag - default `1.3`                                                               |
| `--text-line-height-h4`   | set line-height of h4 tag - default `1.3`                                                               |
| `--text-line-height-h5`   | set line-height of h5 tag - default `1.2`                                                               |
| `--text-line-height-h6`   | set line-height of h6 tag - default `1.2`                                                               |
| `--text-line-height-p`    | set line-height of p tag - default `1.4`                                                                |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
