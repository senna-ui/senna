import { Component, ComponentInterface, Host, h, Prop } from "@stencil/core";
import { Color } from "../../interface";

/**
 * @docsCodePen { "user": "senna-ui", "id": "YzGYNEW" }
 * @docsMenu { "group": "buttons" }
 */
@Component({
  tag: "sen-button",
  styleUrl: "button.scss",
  shadow: true
})
export class Button implements ComponentInterface {
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
  @Prop({ reflect: true }) disabled = false;

  /**
   * Icon to show
   */
  @Prop() icon?: string;

  render() {
    const classes = {
      btn: true,
      'btn-icon': !!this.icon,
      [`btn-${this.color || 'secondary'}`]: true,
    };

    return (
      <Host>
        <button class={classes} type={this.buttonType} disabled={this.disabled}>
          <span>
            {this.icon && <sen-icon name={this.icon}></sen-icon>}
            <slot />
          </span>
        </button>
      </Host>
    );
  }
}
