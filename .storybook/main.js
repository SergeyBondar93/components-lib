module.exports = {
  core: {
    builder: "webpack5",
  },
  stories: ["../packages/**/*.stories.(ts|tsx)"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-knobs",
    "@storybook/addon-docs",
    "@storybook/addon-backgrounds",
  ],
  framework: "@storybook/react",
};
