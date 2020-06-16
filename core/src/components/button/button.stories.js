import notes from "./readme.md";

export default {
  title: "Button",
  parameters: {
    notes,
  },
};

export const Primary = () =>
  '<sen-button color="primary">My Button</sen-button>';

export const Secondary = () =>
  '<sen-button color="secondary">My Button</sen-button>';
