const path = require("path");
const glob = require("glob");

module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-actions/register",
    "@storybook/addon-notes/register",
  ],
  webpackFinal: (config) => {
    // watch all relevant files in dist folder
    const distDir = path.resolve(__dirname, "../www");
    const files = glob.sync(`${distDir}/**/*.entry.js`, {
      absolute: true,
      ignore: ["**/*.system.entry.js"],
    });
    config.entry.push(...files);
    return config;
  },
};
