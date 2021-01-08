import type { ComponentInterface } from "@stencil/core";
import { Component, Host, h, Prop } from "@stencil/core";

import type { TextAlign } from "../../interface";

/**
 * @docsMenu { "group": "table", "subGroup": "basic-table" }
 * @docsCodePen { "user": "senna-ui", "id": "QWKBpGd" }
 */
@Component({
  tag: "sen-table-cell",
  shadow: true,
  styleUrl: "table-cell.scss",
})
export class SenTableCell implements ComponentInterface {
  /**
   * How many columns to span
   */
  @Prop() colspan?: string | number | undefined = undefined;

  /**
   * How many rows to span
   */
  @Prop() rowspan?: string | number | undefined = undefined;

  /**
   * Alignment of contents
   */
  @Prop() align?: TextAlign | undefined = undefined;

  render() {
    return (
      <Host>
        <td
          style={{ textAlign: this.align }}
          colSpan={this.colspan ? Number(this.colspan) : undefined}
          rowSpan={this.rowspan ? Number(this.rowspan) : undefined}
        >
          <slot></slot>
        </td>
      </Host>
    );
  }
}
