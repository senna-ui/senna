import { Component, ComponentInterface, Host, h, Prop } from "@stencil/core";
import { Color } from "../../interface";

@Component({
  tag: "sen-button",
  styleUrl: "button.scss",
  shadow: true,
})
export class SaButton implements ComponentInterface {
  /**
   * Button type
   */
  @Prop() buttonType: "button" | "submit" | "reset" = "button";
  /**
   * Button variant
   */
  @Prop() color?: Color;
  /**
   * Disables the button
   */
  @Prop({ reflectToAttr: true }) disabled = false;

  render() {
    const classes = {
      btn: true,
      ["btn-" + this.color]: true,
    };

    return (
      <Host>
        <button type={this.buttonType} disabled={this.disabled} class={classes}>
          <slot></slot>
        </button>
      </Host>
    );
  }
}
