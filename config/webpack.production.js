// eslint-env node
const StatsPlugin = require('stats-webpack-plugin');

module.exports = {
  output: {
    filename: '[name].[chunkhash:8].js'
  },
  resolve: {
    alias: {
      react: 'preact',
      'react-dom': 'preact'
    }
  },
  stats: {
    assets: true,
    entrypoints: true,
    performance: true,
    chunks: true,
    timings: true,
    children: false,
    source: false,
    modules: false,
    warnings: false
  },
  plugins: [
    new StatsPlugin('../artifacts/webpack.json')
  ]
};
