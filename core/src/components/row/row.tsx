import { Component, ComponentInterface, Host, h } from "@stencil/core";

@Component({
  tag: "sa-row",
  styleUrl: "row.scss",
  shadow: false,
})
export class Row implements ComponentInterface {
  render() {
    return (
      <Host class="row">
        <slot></slot>
      </Host>
    );
  }
}
