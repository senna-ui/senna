export default {
  title: "Menu",
};

export const Default = () => {
  const menu = document.createElement("sen-menu");
  menu.items = [
    { label: "Accounts" },
    { label: "Statistics" },
    { label: "Settings" },
  ];

  return menu;
};
