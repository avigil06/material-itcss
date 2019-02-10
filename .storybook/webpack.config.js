const path = require('path');
const scss = {
  test: /\.scss$/,
  use: [
    'vue-style-loader',
    'css-loader',
    'sass-loader'
  ],
};
module.exports = (storybookBaseConfig, configType, defaultConfig) => {
  defaultConfig.module.rules.push(scss);
  defaultConfig.resolve.alias['@'] = '../src';

  return defaultConfig;
};
