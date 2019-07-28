const nodeExternals = require('webpack-node-externals')
const NodemonPlugin = require('nodemon-webpack-plugin')

module.exports = {
  // target: 'web', // default
  target: 'node',

  // Most source maps don't map corrently in Node. (See source-map-support)
  devtool: 'cheap-source-map',

  // To NOT bundle 3rd-party deps. You could do it yourself too
  // See https://jlongster.com/Backend-Apps-with-Webpack--Part-I
  externals: [
    nodeExternals()
  ],

  plugins: [
    // To start and reload a nodemon after webpack re-builds
    new NodemonPlugin()
  ]
}
