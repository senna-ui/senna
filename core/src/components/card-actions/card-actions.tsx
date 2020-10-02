import { Component, ComponentInterface, Host, h } from "@stencil/core";

@Component({
  tag: "sen-card-actions",
  styleUrl: "card-actions.scss",
  shadow: true,
})
export class CardActions implements ComponentInterface {
  render() {
    return (
      <Host>
        <footer>
          <slot></slot>
        </footer>
      </Host>
    );
  }
}
