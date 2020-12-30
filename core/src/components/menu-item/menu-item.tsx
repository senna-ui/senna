import type { EventEmitter } from "@stencil/core";
import { Component, Host, h, Prop, Event } from "@stencil/core";

/**
 * @docsMenu { "group": "navigation", "subGroup": "menu" }
 */
@Component({
  tag: "sen-menu-item",
  styleUrl: "menu-item.scss",
  shadow: true,
})
export class MenuItem {
  /**
   * Value to emit when clicked
   */
  @Prop() value: any;

  /**
   * Active state
   */
  @Prop() active = false;

  /**
   * Emitted when a keyboard input occurred.
   */
  @Event() senInput!: EventEmitter<any>;

  private onClick = () => {
    this.senInput.emit(this.value);
  };

  render() {
    return (
      <Host>
        <a class={this.active ? "active" : ""} onClick={this.onClick}>
          <slot />
        </a>
      </Host>
    );
  }
}
