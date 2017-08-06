// eslint-env node
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(
  require('./config/webpack.common'),
  // eslint-disable-next-line import/no-dynamic-require
  require(`./config/webpack.${process.env.NODE_ENV}`)
);
