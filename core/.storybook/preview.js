import { addDecorator } from "@storybook/html";

addDecorator(
  (storyFn) =>
    `
    <div style="padding: 20px;">
      <sen-app>${storyFn()}</sen-app>
    </div>
    `
);
import { configureActions } from "@storybook/addon-actions";

configureActions({
  depth: 100,
  // Limit the number of items logged into the actions panel
  limit: 20,
});
