// eslint-env node
const webpack = require('webpack');
const path = require('path');

module.exports = {
  output: {
    filename: '[name].js'
  },
  devServer: {
    contentBase: path.join(__dirname, '../dist')
  },
  plugins: [
    new webpack.DefinePlugin({
      __PRODUCTION__: false
    })
  ],
  devtool: 'cheap-module-eval-source-map'
};
