// eslint-env node
const path = require('path');

module.exports = {
  output: {
    filename: '[name].js'
  },
  devServer: {
    contentBase: path.join(__dirname, '../dist')
  },
  devtool: 'cheap-module-eval-source-map'
};
