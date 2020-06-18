const path = require("path");
const glob = require("glob");

module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-actions/register",
    {
      name: "@storybook/preset-typescript",
      options: {
        tsLoaderOptions: {
          configFile: path.resolve(__dirname, "../tsconfig.json"),
        },
        include: [path.resolve(__dirname)],
      },
    },
    "@storybook/addon-notes/register",
  ],
  webpackFinal: (config) => {
    // watch all revelant files in dist folder
    const distDir = path.resolve(__dirname, "../dist");
    const files = glob.sync(`${distDir}/**/*.entry.js`, {
      absolute: true,
      ignore: ["**/*.system.entry.js"],
    });
    config.entry.push(...files);
    return config;
  },
};
