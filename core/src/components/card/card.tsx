import { Component, ComponentInterface, Host, h } from "@stencil/core";

/**
 * @docsCodePen { "user": "casaper", "id": "LYZGXeP" }
 * @docsMenu { "group": "layout", "subGroup": "card" }
 */
@Component({
  tag: "sen-card",
  styleUrl: "card.scss",
  shadow: true,
})
export class Card implements ComponentInterface {
  render() {
    return (
      <Host>
        <article>
          <slot></slot>
        </article>
      </Host>
    );
  }
}
