# sen-grid

The grid is a powerful mobile-first flexbox system for building custom layouts.

It is composed of three units — a grid, [row(s)](../row) and [column(s)](../col). Columns will expand to fill the row, and will resize to fit additsenal columns. It is based on a 12 column layout with different breakpoints based on the screen size. The number of columns can be customized using CSS.

See the [Responsive Grid documentatsen](/docs/layout/grid) for more informatsen.

<!-- Auto Generated Below -->


## Usage

### Javascript

```html
<sen-grid>
  <sen-row>
    <sen-col>
      sen-col
    </sen-col>
    <sen-col>
      sen-col
    </sen-col>
    <sen-col>
      sen-col
    </sen-col>
    <sen-col>
      sen-col
    </sen-col>
  </sen-row>

  <sen-row>
    <sen-col size="6">
      sen-col [size="6"]
    </sen-col>
    <sen-col>
      sen-col
    </sen-col>
    <sen-col>
      sen-col
    </sen-col>
  </sen-row>

  <sen-row>
    <sen-col size="3">
      sen-col [size="3"]
    </sen-col>
    <sen-col>
      sen-col
    </sen-col>
    <sen-col size="3">
      sen-col [size="3"]
    </sen-col>
  </sen-row>

  <sen-row>
    <sen-col size="3">
      sen-col [size="3"]
    </sen-col>
    <sen-col size="3" offset="3">
      sen-col [size="3"] [offset="3"]
    </sen-col>
  </sen-row>

  <sen-row>
    <sen-col>
      sen-col
    </sen-col>
    <sen-col>
      sen-col
      <br />#
    </sen-col>
    <sen-col>
      sen-col
      <br /># <br />#
    </sen-col>
    <sen-col>
      sen-col
      <br /># <br /># <br />#
    </sen-col>
  </sen-row>

  <sen-row>
    <sen-col class="sen-align-self-start">
      sen-col [start]
    </sen-col>
    <sen-col class="sen-align-self-center">
      sen-col [center]
    </sen-col>
    <sen-col class="sen-align-self-end">
      sen-col [end]
    </sen-col>
    <sen-col>
      sen-col
      <br /># <br />#
    </sen-col>
  </sen-row>

  <sen-row class="sen-align-items-start">
    <sen-col>
      [start] sen-col
    </sen-col>
    <sen-col>
      [start] sen-col
    </sen-col>
    <sen-col class="sen-align-self-end">
      [start] sen-col [end]
    </sen-col>
    <sen-col>
      sen-col
      <br /># <br />#
    </sen-col>
  </sen-row>

  <sen-row class="sen-align-items-center">
    <sen-col>
      [center] sen-col
    </sen-col>
    <sen-col>
      [center] sen-col
    </sen-col>
    <sen-col>
      [center] sen-col
    </sen-col>
    <sen-col>
      sen-col
      <br /># <br />#
    </sen-col>
  </sen-row>

  <sen-row class="sen-align-items-end">
    <sen-col>
      [end] sen-col
    </sen-col>
    <sen-col class="sen-align-self-start">
      [end] sen-col [start]
    </sen-col>
    <sen-col>
      [end] sen-col
    </sen-col>
    <sen-col>
      sen-col
      <br /># <br />#
    </sen-col>
  </sen-row>

  <sen-row>
    <sen-col size="12" size-sm>
      sen-col [size="12"] [size-sm]
    </sen-col>
    <sen-col size="12" size-sm>
      sen-col [size="12"] [size-sm]
    </sen-col>
    <sen-col size="12" size-sm>
      sen-col [size="12"] [size-sm]
    </sen-col>
    <sen-col size="12" size-sm>
      sen-col [size="12"] [size-sm]
    </sen-col>
  </sen-row>

  <sen-row>
    <sen-col size="12" size-md>
      sen-col [size="12"] [size-md]
    </sen-col>
    <sen-col size="12" size-md>
      sen-col [size="12"] [size-md]
    </sen-col>
    <sen-col size="12" size-md>
      sen-col [size="12"] [size-md]
    </sen-col>
    <sen-col size="12" size-md>
      sen-col [size="12"] [size-md]
    </sen-col>
  </sen-row>

  <sen-row>
    <sen-col size="6" size-lg offset="3">
      sen-col [size="6"] [size-lg] [offset="3"]
    </sen-col>
    <sen-col size="3" size-lg>
      sen-col [size="3"] [size-lg]
    </sen-col>
  </sen-row>
</sen-grid>
```


### React

```tsx
import React from "react";
import { SenGrid, SenRow, SenCol, SenContent } from "@senic/react";

export const GridExample: React.FC = () => (
  <SenContent>
    <SenGrid>
      <SenRow>
        <SenCol>sen-col</SenCol>
        <SenCol>sen-col</SenCol>
        <SenCol>sen-col</SenCol>
        <SenCol>sen-col</SenCol>
      </SenRow>

      <SenRow>
        <SenCol size="6">sen-col size="6"</SenCol>
        <SenCol>sen-col</SenCol>
        <SenCol>sen-col</SenCol>
      </SenRow>

      <SenRow>
        <SenCol size="3">sen-col size="3"</SenCol>
        <SenCol>sen-col</SenCol>
        <SenCol size="3">sen-col size="3"</SenCol>
      </SenRow>

      <SenRow>
        <SenCol size="3">sen-col size="3"</SenCol>
        <SenCol size="3" offset="3">
          sen-col size="3" offset="3"
        </SenCol>
      </SenRow>

      <SenRow>
        <SenCol>sen-col</SenCol>
        <SenCol>
          sen-col
          <br />#
        </SenCol>
        <SenCol>
          sen-col
          <br />#
          <br />#
        </SenCol>
        <SenCol>
          sen-col
          <br />#
          <br />#
          <br />#
        </SenCol>
      </SenRow>

      <SenRow>
        <SenCol className="sen-align-self-start">sen-col start</SenCol>
        <SenCol className="sen-align-self-center">sen-col center</SenCol>
        <SenCol className="sen-align-self-end">sen-col end</SenCol>
        <SenCol>
          sen-col
          <br />#
          <br />#
        </SenCol>
      </SenRow>

      <SenRow className="sen-align-items-start">
        <SenCol>start sen-col</SenCol>
        <SenCol>start sen-col</SenCol>
        <SenCol className="sen-align-self-end">start sen-col end</SenCol>
        <SenCol>
          sen-col
          <br />#
          <br />#
        </SenCol>
      </SenRow>

      <SenRow className="sen-align-items-center">
        <SenCol>center sen-col</SenCol>
        <SenCol>center sen-col</SenCol>
        <SenCol>center sen-col</SenCol>
        <SenCol>
          sen-col
          <br />#
          <br />#
        </SenCol>
      </SenRow>

      <SenRow className="sen-align-items-end">
        <SenCol>end sen-col</SenCol>
        <SenCol className="sen-align-self-start">end sen-col start</SenCol>
        <SenCol>end sen-col</SenCol>
        <SenCol>
          sen-col
          <br />#
          <br />#
        </SenCol>
      </SenRow>

      <SenRow>
        <SenCol size="12" size-sm>
          sen-col size="12" size-sm
        </SenCol>
        <SenCol size="12" size-sm>
          sen-col size="12" size-sm
        </SenCol>
        <SenCol size="12" size-sm>
          sen-col size="12" size-sm
        </SenCol>
        <SenCol size="12" size-sm>
          sen-col size="12" size-sm
        </SenCol>
      </SenRow>

      <SenRow>
        <SenCol size="12" size-md>
          sen-col size="12" size-md
        </SenCol>
        <SenCol size="12" size-md>
          sen-col size="12" size-md
        </SenCol>
        <SenCol size="12" size-md>
          sen-col size="12" size-md
        </SenCol>
        <SenCol size="12" size-md>
          sen-col size="12" size-md
        </SenCol>
      </SenRow>

      <SenRow>
        <SenCol size="6" size-lg offset="3">
          sen-col size="6" size-lg offset="3"
        </SenCol>
        <SenCol size="3" size-lg>
          sen-col size="3" size-lg
        </SenCol>
      </SenRow>
    </SenGrid>
  </SenContent>
);
```



## Properties

| Property | Attribute | Description                                                           | Type      | Default |
| -------- | --------- | --------------------------------------------------------------------- | --------- | ------- |
| `fixed`  | `fixed`   | If `true`, the grid will have a fixed width based on the screen size. | `boolean` | `false` |


## CSS Custom Properties

| Name                    | Description                           |
| ----------------------- | ------------------------------------- |
| `--sen-grid-padding`    | Padding for the Grid                  |
| `--sen-grid-padding-lg` | Padding for the Grid on lg screens    |
| `--sen-grid-padding-md` | Padding for the Grid on md screens    |
| `--sen-grid-padding-sm` | Padding for the Grid on sm screens    |
| `--sen-grid-padding-xl` | Padding for the Grid on xl screens    |
| `--sen-grid-padding-xs` | Padding for the Grid on xs screens    |
| `--sen-grid-width`      | Width of the fixed Grid               |
| `--sen-grid-width-lg`   | Width of the fixed Grid on lg screens |
| `--sen-grid-width-md`   | Width of the fixed Grid on md screens |
| `--sen-grid-width-sm`   | Width of the fixed Grid on sm screens |
| `--sen-grid-width-xl`   | Width of the fixed Grid on xl screens |
| `--sen-grid-width-xs`   | Width of the fixed Grid on xs screens |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
