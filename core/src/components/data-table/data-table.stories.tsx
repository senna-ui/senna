import { users } from "../../utils/mockdata/users";

export default {
  title: "Table",
};

export const Default = () => {
  const table = document.createElement("sen-data-table");
  table.headers = [
    { value: "Id", key: "id" },
    { value: "First Name", key: "first_name" },
    { value: "Last Name", key: "last_name" },
    { value: "Email", key: "email" },
    { value: "Gender", key: "gender" },
    { value: "IP", key: "ip_address", textAlign: "right" },
  ];
  table.data = users;

  return table;
};
