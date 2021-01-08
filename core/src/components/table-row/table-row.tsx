import { Component, Host, h } from "@stencil/core";

/**
 * @docsMenu { "group": "table", "subGroup": "basic-table" }
 * @docsCodePen { "user": "senna-ui", "id": "QWKBpGd" }
 */
@Component({
  tag: "sen-table-row",
  shadow: true,
  styleUrl: "table-row.scss",
})
export class SenTableRow {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
