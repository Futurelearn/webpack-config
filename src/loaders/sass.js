const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { resolve } = require('path');
const DEFAULT_STYLE_LOADERS = require('./default_style_loaders');

const use = [
  MiniCssExtractPlugin.loader,
  'css-loader',
  ...DEFAULT_STYLE_LOADERS,
  {
    loader: 'sass-resources-loader',
    options: {
      resources: [
        resolve('app', './assets/stylesheets/application/1-tools/_all.scss'),
        resolve('app', './assets/stylesheets/application/2-brand/_all.scss'),
        resolve('app', './assets/stylesheets/application/base/_all.scss'),
      ],
    },
  },
];

module.exports = {
  test: /\.(scss|sass|css)$/i,
  exclude: /\.module.(scss|sass|css)$/i,
  use,
};
