# sen-checkbox



<!-- Auto Generated Below -->


## Usage

### Example

```html
<sen-checkbox label="A labeled checkbox" value="1"></sen-checkbox>
<sen-checkbox>Slot used for label</sen-checkbox>
<sen-checkbox label="A disabled checkbox" disabled></sen-checkbox>
<sen-checkbox label="A readonly checkbox" readonly></sen-checkbox>
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




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
