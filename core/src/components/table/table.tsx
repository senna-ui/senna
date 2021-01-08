import type { ComponentInterface } from "@stencil/core";
import { Component, Host, h } from "@stencil/core";

/**
 * @docsMenu { "group": "table", "subGroup": "basic-table" }
 */
@Component({
  tag: "sen-table",
  shadow: true,
  styleUrl: "table.scss",
})
export class SenTable implements ComponentInterface {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
