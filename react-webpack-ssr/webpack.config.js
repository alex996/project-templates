const nodeExternals = require('webpack-node-externals')
const NodemonPlugin = require('nodemon-webpack-plugin')

module.exports = [
  {
    devtool: 'source-map',
    entry: './src/client.js',
    output: {
      path: `${__dirname}/public`
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    }
  },
  {
    target: 'node',
    devtool: 'source-map',
    entry: './src/server.js',
    externals: [
      nodeExternals()
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              // Overwrite .babelrc to ignore browser targets & output esnext
              presets: [
                [
                  '@babel/env', { modules: 'cjs', targets: 'node 12' }
                ],
                '@babel/react'
              ],
              plugins: [
                '@babel/syntax-dynamic-import'
              ]
            }
          }
        }
      ]
    },
    plugins: [
      new NodemonPlugin({
        // Only watch output dir to avoid false positive reloads
        watch: `${__dirname}/dist`
      })
    ]
  }
]
