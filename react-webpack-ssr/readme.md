# react-webpack-ssr

React 16.8.x + Webpack 4 + Babel 7 template for SSR.

## Notes

- using [`source-map-support`](https://github.com/evanw/node-source-map-support) since most `devtool`s are broken and/or imprecise (webpack/webpack#5491)

- server config overwrites `.babelrc` to bypass browser targets & emit ESNext compatible with Node 12+ only

## Live reload

Several options are available:

- [`reload` in Express](https://www.npmjs.com/package/reload#using-reload-in-express) - only reload when BE bundle changes
  - in practice, watches all code except FE entrypoint (`client.js` file)

- [`reload` CLI](https://www.npmjs.com/package/reload#using-reload-as-a-command-line-application) - only reload when FE assets change; runs a separate server
  - won't work with SSR; only works when you emit `index.html` in watch dir

- `webpack-livereload-plugin` - only reload when FE assets change; runs a separate server

- `webpack-dev-middleware` + `webpack-hot-middleware`
  - manual & verbose setup; see [example template](https://github.com/manuelbieh/react-ssr-setup)
