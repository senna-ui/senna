import type { ComponentInterface } from "@stencil/core";
import { Component, Host, h } from "@stencil/core";

/**
 * @docsCodePen { "user": "senna-ui", "id": "wvzpgoe" }
 * @docsMenu { "group": "card" }
 */
@Component({
  tag: "sen-card-title",
  styleUrl: "card-title.scss",
  shadow: true,
})
export class CardTitle implements ComponentInterface {
  render() {
    return (
      <Host>
        <header>
          <h1>
            <slot></slot>
          </h1>
        </header>
      </Host>
    );
  }
}
