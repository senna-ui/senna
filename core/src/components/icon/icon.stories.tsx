const data = [
  { id: 1, label: "User list" },
  { id: 2, label: "Todos" },
  { id: 3, label: "New Todo" },
];

export default {
  title: "Typeahead",
};

export const Default = () => {
  const component = document.createElement("sen-typeahead");
  component.options = data;

  return component;
};
