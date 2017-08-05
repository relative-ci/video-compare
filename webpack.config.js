// eslint-env node
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const context = path.join(__dirname, 'src');

const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  context,
  entry: './index.jsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: isDevelopment
      ? '[name].js'
      : '[name].[chunkhash:8].js'
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
    alias: {
      react: isDevelopment ? 'react' : 'preact',
      'react-dom': isDevelopment ? 'react-dom' : 'preact'
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          emitWarnings: isDevelopment
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        enforce: 'post',
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                sourceMap: true
              }
            },
            'postcss-loader'
          ]
        })
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      template: './index.html',
      filename: 'index.html'
    }),
    new ExtractTextPlugin({
      filename: '[name].[contenthash:8].css',
      disable: isDevelopment
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist')
  },
  devtool: isDevelopment
    ? 'sourcemap'
    : false
};
