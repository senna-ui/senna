import {
  Component,
  ComponentInterface,
  Host,
  h,
  Prop,
  Element,
} from "@stencil/core";
import { Color } from "../../interface";

/**
 * Docs page options
 * @docsCodePen { "user": "casaper", "id": "MWeKZmM" }
 * @docsMenu { "group": "app" }
 */

@Component({
  tag: "sen-alert",
  styleUrl: "alert.scss",
  shadow: true,
})
export class Alert implements ComponentInterface {
  private hasTitleSlot: boolean = false;

  @Element() el!: HTMLSenAlertElement;

  /**
   * Button variant
   */
  @Prop() color?: Color;

  componentWillLoad() {
    this.hasTitleSlot = !!this.el.querySelector('[slot="title"]');
  }

  /**
   * @slot title - optional alert title slot
   */
  render() {
    const classes = {
      ["alert-" + this.color]: true,
    };
    return (
      <Host class={classes}>
        {this.hasTitleSlot && (
          <div class="alert-title">
            <slot name="title"></slot>
          </div>
        )}
        <slot></slot>
      </Host>
    );
  }
}
