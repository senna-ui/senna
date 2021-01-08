import type { ComponentInterface } from "@stencil/core";
import { Component, Host, h, Prop } from "@stencil/core";

import type { TableHeaders } from "../../interface";

/**
 * @docsMenu { "group": "table", "subGroup": "data-table" }
 */
@Component({
  tag: "sen-data-table",
  styleUrl: "data-table.scss",
  shadow: true,
})
export class DataTable implements ComponentInterface {
  /**
   * Table headers
   */
  @Prop() headers: TableHeaders = [];
  /**
   * Table data, array of table rows
   */
  @Prop() data: any[] = [];
  render() {
    return (
      <Host>
        <table class="table">
          <thead>
            {this.headers.map((header) => (
              <th style={{ textAlign: header.textAlign }}>{header.value}</th>
            ))}
          </thead>
          <tbody>
            {this.data.map((row) => (
              <tr>
                {this.headers.map((header) => (
                  <td
                    style={{
                      textAlign: row[header.key].textAlign || header.textAlign,
                    }}
                  >
                    {row[header.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Host>
    );
  }
}
