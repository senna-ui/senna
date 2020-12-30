import type { ComponentInterface } from "@stencil/core";
import { Component, Host, h } from "@stencil/core";

/**
 * @docsCodePen { "user": "senna-ui", "id": "wvzpgoe" }
 * @docsMenu { "group": "card" }
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
