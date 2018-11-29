const nodeExternals = require('webpack-node-externals')
const NodemonPlugin = require('nodemon-webpack-plugin')
const { BannerPlugin } = require('webpack')

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
    new NodemonPlugin(),

    // See https://webpack.js.org/plugins/banner-plugin/
    new BannerPlugin({
      raw: true,
      entryOnly: true,
      // These are required at runtime, so be mindful of the overhead.
      // https://github.com/evanw/node-source-map-support/issues/122
      banner: `require('source-map-support').install();`
    })
  ]
}
