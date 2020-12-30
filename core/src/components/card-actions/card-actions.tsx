import type { ComponentInterface } from "@stencil/core";
import { Component, Host, h } from "@stencil/core";

/**
 * @docsCodePen { "user": "senna-ui", "id": "wvzpgoe" }
 * @docsMenu { "group": "card" }
 */
@Component({
  tag: "sen-card-actions",
  styleUrl: "card-actions.scss",
  shadow: true,
})
export class CardActions implements ComponentInterface {
  render() {
    return (
      <Host>
        <footer>
          <slot></slot>
        </footer>
      </Host>
    );
  }
}
