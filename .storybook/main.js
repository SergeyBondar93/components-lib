module.exports = {
  stories: ['../packages/**/*.stories.(ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5'
  }
};