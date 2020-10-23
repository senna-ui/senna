import { Component, ComponentInterface, Host, h } from "@stencil/core";

/**
 * @docsCodePen { "user": "casaper", "id": "LYZGXeP" }
 * @docsMenu { "group": "layout", "subGroup": "card" }
 */
@Component({
  tag: "sen-card-body",
  styleUrl: "card-body.scss",
  shadow: true,
})
export class CardBody implements ComponentInterface {
  render() {
    return (
      <Host>
        <p>
          <slot></slot>
        </p>
      </Host>
    );
  }
}
