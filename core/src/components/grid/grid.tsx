import { Component, ComponentInterface, Host, Prop, h } from "@stencil/core";

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
