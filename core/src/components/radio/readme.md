# sen-checkbox



<!-- Auto Generated Below -->


## Usage

### React

```tsx
import React from "react";
import { SenRadio } from "@senna/react";

export const RadioExample: React.FC = () => {

  const radioOptions = [
    {value: 1, label: "Option 1"},
    {value: 2, label: "Option 2"},
    {value: 3, label: "Option 3"},
  ]

  return <SenRadio options={radioOptions} />
}
```



## Properties

| Property   | Attribute  | Description                                                     | Type                                    | Default        |
| ---------- | ---------- | --------------------------------------------------------------- | --------------------------------------- | -------------- |
| `disabled` | `disabled` | If `true`, the user cannot interact with the radio.             | `boolean`                               | `false`        |
| `label`    | `label`    | Label for the radio                                             | `string`                                | `""`           |
| `name`     | `name`     | The name of the control, which is submitted with the form data. | `string`                                | `this.radioId` |
| `options`  | --         | Radio options to display                                        | `RadioOption[]`                         | `[]`           |
| `readonly` | `readonly` | If `true`, the user cannot modify the value.                    | `boolean`                               | `false`        |
| `value`    | `value`    | The value of the input.                                         | `null \| number \| string \| undefined` | `undefined`    |


## Events

| Event       | Description                             | Type                                  |
| ----------- | --------------------------------------- | ------------------------------------- |
| `senChange` | Emitted when input is changed           | `CustomEvent<{ value: RadioValue; }>` |
| `senInput`  | Emitted when a keyboard input occurred. | `CustomEvent<MouseEvent>`             |


## Methods

### `setFocus() => Promise<void>`

Sets focus on the specified input. Use this method instead of the global
`input.focus()`.

#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [demo-form](../_demo/demo-form)

### Graph
```mermaid
graph TD;
  demo-form --> sen-radio
  style sen-radio fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
