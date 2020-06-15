import notes from "./readme.md";

export default {
  title: "Button",
  parameters: {
    notes,
  },
};

export const Primary = () =>
  '<sa-button color="primary">My Button</sa-button>';

export const Secondary = () =>
  '<sa-button color="secondary">My Button</sa-button>';
