# sen-col

Columns are cellular components of the [grid](../grid) system and go inside of a [row](../row).
They will expand to fill their row. All content within a grid should go inside of a column.

See [Grid Layout](/docs/layout/grid) for more information.

## Column Alignment

By default, columns will stretch to fill the entire height of the row. Columns are [flex items](https://developer.mozilla.org/en-US/docs/Glossary/Flex_Item), so there are several [CSS classes](/docs/layout/css-utilities#flex-item-properties) that can be applied to a column to customize this behavior.

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute   | Description                                                                                                                                                                          | Type                  | Default     |
| ---------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------- | ----------- |
| `offset`   | `offset`    | The amount to offset the column, in terms of how many columns it should shift to the end of the total available.                                                                     | `string \| undefined` | `undefined` |
| `offsetLg` | `offset-lg` | The amount to offset the column for lg screens, in terms of how many columns it should shift to the end of the total available.                                                      | `string \| undefined` | `undefined` |
| `offsetMd` | `offset-md` | The amount to offset the column for md screens, in terms of how many columns it should shift to the end of the total available.                                                      | `string \| undefined` | `undefined` |
| `offsetSm` | `offset-sm` | The amount to offset the column for sm screens, in terms of how many columns it should shift to the end of the total available.                                                      | `string \| undefined` | `undefined` |
| `offsetXl` | `offset-xl` | The amount to offset the column for xl screens, in terms of how many columns it should shift to the end of the total available.                                                      | `string \| undefined` | `undefined` |
| `offsetXs` | `offset-xs` | The amount to offset the column for xs screens, in terms of how many columns it should shift to the end of the total available.                                                      | `string \| undefined` | `undefined` |
| `pull`     | `pull`      | The amount to pull the column, in terms of how many columns it should shift to the start of the total available.                                                                     | `string \| undefined` | `undefined` |
| `pullLg`   | `pull-lg`   | The amount to pull the column for lg screens, in terms of how many columns it should shift to the start of the total available.                                                      | `string \| undefined` | `undefined` |
| `pullMd`   | `pull-md`   | The amount to pull the column for md screens, in terms of how many columns it should shift to the start of the total available.                                                      | `string \| undefined` | `undefined` |
| `pullSm`   | `pull-sm`   | The amount to pull the column for sm screens, in terms of how many columns it should shift to the start of the total available.                                                      | `string \| undefined` | `undefined` |
| `pullXl`   | `pull-xl`   | The amount to pull the column for xl screens, in terms of how many columns it should shift to the start of the total available.                                                      | `string \| undefined` | `undefined` |
| `pullXs`   | `pull-xs`   | The amount to pull the column for xs screens, in terms of how many columns it should shift to the start of the total available.                                                      | `string \| undefined` | `undefined` |
| `push`     | `push`      | The amount to push the column, in terms of how many columns it should shift to the end of the total available.                                                                       | `string \| undefined` | `undefined` |
| `pushLg`   | `push-lg`   | The amount to push the column for lg screens, in terms of how many columns it should shift to the end of the total available.                                                        | `string \| undefined` | `undefined` |
| `pushMd`   | `push-md`   | The amount to push the column for md screens, in terms of how many columns it should shift to the end of the total available.                                                        | `string \| undefined` | `undefined` |
| `pushSm`   | `push-sm`   | The amount to push the column for sm screens, in terms of how many columns it should shift to the end of the total available.                                                        | `string \| undefined` | `undefined` |
| `pushXl`   | `push-xl`   | The amount to push the column for xl screens, in terms of how many columns it should shift to the end of the total available.                                                        | `string \| undefined` | `undefined` |
| `pushXs`   | `push-xs`   | The amount to push the column for xs screens, in terms of how many columns it should shift to the end of the total available.                                                        | `string \| undefined` | `undefined` |
| `size`     | `size`      | The size of the column, in terms of how many columns it should take up out of the total available. If `"auto"` is passed, the column will be the size of its content.                | `string \| undefined` | `undefined` |
| `sizeLg`   | `size-lg`   | The size of the column for lg screens, in terms of how many columns it should take up out of the total available. If `"auto"` is passed, the column will be the size of its content. | `string \| undefined` | `undefined` |
| `sizeMd`   | `size-md`   | The size of the column for md screens, in terms of how many columns it should take up out of the total available. If `"auto"` is passed, the column will be the size of its content. | `string \| undefined` | `undefined` |
| `sizeSm`   | `size-sm`   | The size of the column for sm screens, in terms of how many columns it should take up out of the total available. If `"auto"` is passed, the column will be the size of its content. | `string \| undefined` | `undefined` |
| `sizeXl`   | `size-xl`   | The size of the column for xl screens, in terms of how many columns it should take up out of the total available. If `"auto"` is passed, the column will be the size of its content. | `string \| undefined` | `undefined` |
| `sizeXs`   | `size-xs`   | The size of the column for xs screens, in terms of how many columns it should take up out of the total available. If `"auto"` is passed, the column will be the size of its content. | `string \| undefined` | `undefined` |


## CSS Custom Properties

| Name                           | Description                                 |
| ------------------------------ | ------------------------------------------- |
| `--sen-grid-column-padding`    | Padding for the Column                      |
| `--sen-grid-column-padding-lg` | Padding for the Column on lg screens and up |
| `--sen-grid-column-padding-md` | Padding for the Column on md screens and up |
| `--sen-grid-column-padding-sm` | Padding for the Column on sm screens and up |
| `--sen-grid-column-padding-xl` | Padding for the Column on xl screens and up |
| `--sen-grid-column-padding-xs` | Padding for the Column on xs screens and up |
| `--sen-grid-columns`           | The number of total Columns in the Grid     |


## Dependencies

### Used by

 - [sen-form-field](../form-field)

### Graph
```mermaid
graph TD;
  sen-form-field --> sen-col
  style sen-col fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
