import type { ComponentInterface } from "@stencil/core";
import { Component, Host, h } from "@stencil/core";

/**
 * @docsCodePen { "user": "senna-ui", "id": "wvzpgPP" }
 * @docsMenu { "group": "buttons" }
 */
@Component({
  tag: "sen-button-group",
  styleUrl: "button-group.scss",
  shadow: true,
})
export class ButtonGroup implements ComponentInterface {
  render() {
    return (
      <Host class="btn-group">
        <slot></slot>
      </Host>
    );
  }
}
