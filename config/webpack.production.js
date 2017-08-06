// eslint-env node
module.exports = {
  output: {
    filename: '[name].[chunkhash:8].js'
  },
  resolve: {
    alias: {
      react: 'preact',
      'react-dom': 'preact'
    }
  }
};
