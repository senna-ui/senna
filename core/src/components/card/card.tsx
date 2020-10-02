import { Component, ComponentInterface, Host, h } from "@stencil/core";

@Component({
  tag: "sen-card",
  styleUrl: "card.scss",
  shadow: true,
})
export class Card implements ComponentInterface {
  render() {
    return (
      <Host>
        <article>
          <slot></slot>
        </article>
      </Host>
    );
  }
}
