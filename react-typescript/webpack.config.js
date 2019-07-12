const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env, { mode }) => {
  const inDev = mode === 'development'

  return {
    devtool: inDev ? 'cheap-module-eval-source-map' : 'source-map',
    output: {
      filename: inDev ? '[name].js' : '[name].[contenthash].js'
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js']
    },
    module: {
      rules: [{ test: /\.tsx?$/, loader: 'ts-loader', exclude: /node_modules/ }]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'index.html'
      })
    ]
  }

}
