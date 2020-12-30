export default {
  title: "Forms/Input",
};

export const Text = () => `<sen-input type="text"></sen-input>`;
export const Checkbox = () =>
  `<sen-input name="check" type="checkbox"></sen-input>`;
export const Radio = () => `
  <sen-input name="rad" type="radio" value="1"></sen-input> Option 1<br>
  <sen-input name="rad" type="radio" value="2"></sen-input> Option 2<br>
  <sen-input name="rad" type="radio" value="3"></sen-input> Option 3<br>
`;
