import { Component, ComponentInterface, Host, Element, h } from "@stencil/core";

/**
 * @docsMenu { "group": "app" }
 */
@Component({
  tag: "sen-app",
  styleUrl: "app.scss",
  shadow: true,
})
export class App implements ComponentInterface {
  @Element() el!: HTMLSenAppElement;

  componentWillLoad() {
    console.log("el", this.el.shadowRoot);
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
