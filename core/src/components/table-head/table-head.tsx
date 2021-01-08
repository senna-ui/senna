import type { ComponentInterface } from "@stencil/core";
import { Component, Host, h } from "@stencil/core";

/**
 * @docsMenu { "group": "table", "subGroup": "basic-table" }
 * @docsCodePen { "user": "senna-ui", "id": "QWKBpGd" }
 */
@Component({
  tag: "sen-table-head",
  shadow: true,
  styleUrl: "table-head.scss",
})
export class SenTableHead implements ComponentInterface {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
