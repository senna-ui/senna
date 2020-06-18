import { Component, ComponentInterface, Host, h } from "@stencil/core";

@Component({
  tag: "sen-button-group",
  styleUrl: "button-group.scss",
  shadow: true,
})
export class Col implements ComponentInterface {
  render() {
    return (
      <Host class="btn-group">
        <slot></slot>
      </Host>
    );
  }
}
