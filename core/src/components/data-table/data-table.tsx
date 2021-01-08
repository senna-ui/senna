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
        <sen-table>
          <sen-table-head>
            <sen-table-row>
              {this.headers.map((header) => (
                <sen-table-cell style={{ textAlign: header.textAlign }}>
                  {header.value}
                </sen-table-cell>
              ))}
            </sen-table-row>
          </sen-table-head>
          <sen-table-body>
            {this.data.map((row) => (
              <sen-table-row>
                {this.headers.map((header) => (
                  <sen-table-cell
                    align={row[header.key].textAlign || header.textAlign}
                  >
                    {row[header.key]}
                  </sen-table-cell>
                ))}
              </sen-table-row>
            ))}
          </sen-table-body>
        </sen-table>
      </Host>
    );
  }
}
