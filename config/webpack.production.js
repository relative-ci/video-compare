// eslint-env node
const webpack = require('webpack');
const StatsPlugin = require('stats-webpack-plugin');
const MiniCssExtract = require('mini-css-extract-plugin');
const { BundleStatsWebpackPlugin } = require('bundle-stats');

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
    modules: true,
    children: false,
    source: false,
    warnings: false
  },
  plugins: [
    new webpack.DefinePlugin({
      __PRODUCTION__: true,
      __GA__: JSON.stringify(process.env.GA)
    }),
    new StatsPlugin('../artifacts/webpack.json'),
    new MiniCssExtract({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
    new BundleStatsWebpackPlugin({
      outDir: '../artifacts'
    })
  ]
};
