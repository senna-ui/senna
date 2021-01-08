# sen-table

<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description                     | Type            | Default |
| --------- | --------- | ------------------------------- | --------------- | ------- |
| `data`    | --        | Table data, array of table rows | `any[]`         | `[]`    |
| `headers` | --        | Table headers                   | `TableHeader[]` | `[]`    |


## Dependencies

### Used by

 - [demo-table](../_demo/demo-table)

### Depends on

- [sen-table](../table)
- [sen-table-head](../table-head)
- [sen-table-row](../table-row)
- [sen-table-cell](../table-cell)
- [sen-table-body](../table-body)

### Graph
```mermaid
graph TD;
  sen-data-table --> sen-table
  sen-data-table --> sen-table-head
  sen-data-table --> sen-table-row
  sen-data-table --> sen-table-cell
  sen-data-table --> sen-table-body
  demo-table --> sen-data-table
  style sen-data-table fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
