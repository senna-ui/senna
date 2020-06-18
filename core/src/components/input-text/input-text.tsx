import { Component, ComponentInterface, Host, h } from "@stencil/core";

@Component({
  tag: "input-text",
  styleUrl: "input-text.scss",
  shadow: true,
})
export class InputText implements ComponentInterface {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
