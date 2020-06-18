import { withActions } from "@storybook/addon-actions";

export default {
  title: "Forms/Input",
};

const text = () => `<sen-input type="text"></sen-input>`;
const checkbox = () => `<sen-input name="check" type="checkbox"></sen-input>`;
const radio = () => `
  <sen-input name="rad" type="radio" value="1"></sen-input> Option 1<br>
  <sen-input name="rad" type="radio" value="2"></sen-input> Option 2<br>
  <sen-input name="rad" type="radio" value="3"></sen-input> Option 3<br>
`;

export const Text = () => withActions("senInput")(text);
export const Checkbox = () => withActions("senInput")(checkbox);
export const Radio = () => withActions("senInput")(radio);
