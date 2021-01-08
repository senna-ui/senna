import { Component, Host, h } from "@stencil/core";

import type { TableHeaders } from "../../../interface";

import { users } from "../../../utils/mockdata/users";

const tableHeaders: TableHeaders = [
  { value: "Id", key: "id" },
  { value: "First Name", key: "first_name" },
  { value: "Last Name", key: "last_name" },
  { value: "Email", key: "email" },
  { value: "Gender", key: "gender" },
  { value: "IP", key: "ip_address", textAlign: "right" },
];

@Component({
  tag: "demo-table",
  shadow: true,
})
export class DemoTable {
  render() {
    return (
      <Host>
        <sen-data-table headers={tableHeaders} data={users} />
      </Host>
    );
  }
}
