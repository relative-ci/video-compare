const path = require('path');
const context = path.join(__dirname, 'src');

module.exports = {
  context,
  entry: './index.jsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: []
  },
  plugins: [],
  devServer: {
    contentBase: path.join(__dirname, 'dist')
  }
};
