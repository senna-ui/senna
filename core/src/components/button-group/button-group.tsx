import { Component, ComponentInterface, Host, h } from "@stencil/core";

/**
 * @docsCodePen { "user": "casaper", "id": "xxOZQqB" }
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
