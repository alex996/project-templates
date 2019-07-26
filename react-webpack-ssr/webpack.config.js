const nodeExternals = require('webpack-node-externals')
const NodemonPlugin = require('nodemon-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const LiveReloadPlugin = require('webpack-livereload-plugin')

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
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
          ]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin(),
      new LiveReloadPlugin({
        delay: 200, // To wait on server bundle
        appendScriptTag: true
      })
    ]
  },
  {
    target: 'node',
    devtool: 'source-map',
    entry: [
      'source-map-support/register',
      './src/server.js'
    ],
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
        },
        {
          test: /\.(sa|sc|c)ss$/,
          loader: 'css-loader',
          options: {
            onlyLocals: true
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
