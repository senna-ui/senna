import { Component, ComponentInterface, Host, h } from "@stencil/core";

/**
 *
 * @docsCodePen { "user": "senna-ui", "id": "eYdydGJ" }
 * @docsMenu { "group": "layout", "subGroup": "grid" }
 */
@Component({
  tag: "sen-row",
  styleUrl: "row.scss",
  shadow: true,
})
export class Row implements ComponentInterface {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
