const nodeExternals = require('webpack-node-externals')
const NodemonPlugin = require('nodemon-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const LiveReloadPlugin = require('webpack-livereload-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')

module.exports = (env, { mode }) => {
  const inDev = mode === 'development'

  return [
    {
      devtool: 'source-map',
      entry: './src/client.js',
      output: {
        path: `${__dirname}/public`,
        filename: inDev ? '[name].js' : '[name].[contenthash].js'
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
        new MiniCssExtractPlugin({
          filename: inDev ? '[name].css' : '[name].[hash].css'
        }),
        new LiveReloadPlugin({
          delay: 200, // To wait on server bundle
          appendScriptTag: true
        }),
        new ManifestPlugin()
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
                // Overwrite .babelrc to ignore browser targets & emit esnext
                presets: [
                  [
                    '@babel/env', { modules: false, targets: 'node 12' }
                  ],
                  '@babel/react'
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
}
