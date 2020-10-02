import { Component, ComponentInterface, Host, h } from "@stencil/core";

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
          <h1><slot></slot></h1>
        </header>
      </Host>
    );
  }
}
