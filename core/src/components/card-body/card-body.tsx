import type { ComponentInterface } from "@stencil/core";
import { Component, Host, h } from "@stencil/core";

/**
 * @docsCodePen { "user": "senna-ui", "id": "wvzpgoe" }
 * @docsMenu { "group": "card" }
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
