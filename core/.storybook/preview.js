import { addDecorator } from "@storybook/html";

addDecorator(
  (storyFn) =>
    `
    <div style="padding: 20px;">
      <sen-app>${storyFn()}</sen-app>
    </div>
    `
);
