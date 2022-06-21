module.exports = {
  stories: ['../packages/**/*.stories.(ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5'
  },
  webpackFinal: async (config) => {
       
    config.resolve.mainFields = ['build:storybook', 'browser', 'module', 'main']
  

    return config;
},
};