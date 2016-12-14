const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SassReplaceWebpackPlugin = require('../../lib');

module.exports = {
  entry: [
    path.resolve(__dirname, 'index.js')
  ],
  devtool: 'eval',
  debug: true,
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'index.js',
    publicPath: ''
  },
  plugins: [
    new SassReplaceWebpackPlugin(/variables\.scss/, 'variables.replace.scss'),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
      inject: true
    })
  ],
  module: {
    loaders: [
      {
        test: /\.scss?$/,
        loader: 'style!css!sass'
      }
    ]
  }
};
