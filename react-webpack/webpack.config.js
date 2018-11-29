const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // entry: 'src/index.js', // default

  // devtool: false // default
  devtool: 'cheap-module-source-map', // Source map https://webpack.js.org/configuration/devtool/

  // output: {
    // filename: 'main.js', // default
    // filename: '[name].[contenthash].js' // Caching https://webpack.js.org/guides/caching/

    // path: `${__dirname}/dist` // default
  // },

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },

  // Aliasing libs, e.g. Material-UI
  // resolve: {
  //   alias: {
  //     '@material-ui/core': '@material-ui/core/es'
  //   }
  // },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ],

  // webpack-dev-server config https://webpack.js.org/configuration/dev-server/
  // devServer: {
  //   open: true,
  //   port: 3000,
  //   compress: true,
  //   historyApiFallback: true, // HTML5 History
  //   proxy: {
  //     '/api': 'http://localhost:3000/api'
  //   }
  // }
}
