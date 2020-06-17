import { Component, ComponentInterface, Host, h } from "@stencil/core";

@Component({
  tag: "sen-app",
  styleUrl: "app.scss",
  shadow: false,
})
export class App implements ComponentInterface {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
