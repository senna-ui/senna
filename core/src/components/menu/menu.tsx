import type { ComponentInterface } from "@stencil/core";
import { Component, Host, h, Prop } from "@stencil/core";

import type { MenuItem } from "../../interface";

/**
 * @docsMenu { "group": "navigation", "subGroup": "menu" }
 */
@Component({
  tag: "sen-menu",
  styleUrl: "menu.scss",
  shadow: true,
})
export class Menu implements ComponentInterface {
  /**
   * Menu items
   */
  @Prop() items: MenuItem[] = [];

  render() {
    return (
      <Host>
        <div class="menu">
          {this.items.map((item) => (
            <sen-menu-item value={item}>{item.label}</sen-menu-item>
          ))}
        </div>
      </Host>
    );
  }
}
