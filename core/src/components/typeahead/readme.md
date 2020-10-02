# sen-typeahead

<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description                     | Type                | Default |
| --------- | --------- | ------------------------------- | ------------------- | ------- |
| `options` | --        | Options to display in typeahead | `TypeaheadOption[]` | `[]`    |
| `value`   | `value`   | The value of the input.         | `string`            | `""`    |


## Events

| Event       | Description                             | Type                               |
| ----------- | --------------------------------------- | ---------------------------------- |
| `senChange` | Emitted when input is changed           | `CustomEvent<OptionSelectedEvent>` |
| `senInput`  | Emitted when a keyboard input occurred. | `CustomEvent<KeyboardEvent>`       |


## Dependencies

### Depends on

- [sen-input](../input)

### Graph
```mermaid
graph TD;
  sen-typeahead --> sen-input
  style sen-typeahead fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
