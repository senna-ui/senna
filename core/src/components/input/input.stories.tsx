import { withActions } from "@storybook/addon-actions";

export default {
  title: "Forms/Input",
};

const input = () => `<sen-input></sen-input>`;

export const Default = () => withActions("senInput")(input);
