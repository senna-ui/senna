# sen-checkbox



<!-- Auto Generated Below -->


## Usage

### Example

```html
<sen-checkbox value={values.isChecked}>
  Your label text
</sen-checkbox>
<sen-checkbox disabled>
  A disabled checkbox
</sen-checkbox>
<sen-checkbox readonly>
  A readonly checkbox
</sen-checkbox>
```



## Properties

| Property   | Attribute  | Description                                                     | Type                   | Default           |
| ---------- | ---------- | --------------------------------------------------------------- | ---------------------- | ----------------- |
| `disabled` | `disabled` | If `true`, the user cannot interact with the checkbox.          | `boolean`              | `false`           |
| `name`     | `name`     | The name of the control, which is submitted with the form data. | `string`               | `this.checkboxId` |
| `readonly` | `readonly` | If `true`, the user cannot modify the value.                    | `boolean`              | `false`           |
| `value`    | `value`    | The value of the input.                                         | `boolean \| undefined` | `false`           |


## Events

| Event       | Description                             | Type                               |
| ----------- | --------------------------------------- | ---------------------------------- |
| `senChange` | Emitted when input is changed           | `CustomEvent<{ value: boolean; }>` |
| `senInput`  | Emitted when a keyboard input occurred. | `CustomEvent<MouseEvent>`          |


## Methods

### `setFocus() => Promise<void>`

Sets focus on the specified `ion-input`. Use this method instead of the global
`input.focus()`.

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
