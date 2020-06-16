import { Component, ComponentInterface, h, Host } from "@stencil/core";

@Component({
  tag: "sen-container",
  styleUrl: "container.scss",
  shadow: false,
})
export class Container implements ComponentInterface {
  render() {
    return (
      <Host class="container">
        <slot></slot>
      </Host>
    );
  }
}
