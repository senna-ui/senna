import type { ComponentInterface } from "@stencil/core";
import { Component, Host, Prop, h } from "@stencil/core";

/**
 *
 * @docsCodePen { "user": "senna-ui", "id": "eYdydGJ" }
 * @docsMenu { "group": "layout", "subGroup": "grid" }
 */
@Component({
  tag: "sen-grid",
  styleUrl: "grid.scss",
  shadow: true,
})
export class Grid implements ComponentInterface {
  /**
   * If `true`, the grid will have a fixed width based on the screen size.
   */
  @Prop() fixed = false;

  render() {
    return (
      <Host
        class={{
          "grid-fixed": this.fixed,
        }}
      >
        <slot></slot>
      </Host>
    );
  }
}
