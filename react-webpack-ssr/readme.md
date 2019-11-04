# react-webpack-ssr

React 16.8.x + Webpack 4 + Babel 7 template for SSR.

## Notes

- using [`source-map-support`](https://github.com/evanw/node-source-map-support) since most `devtool`s are broken and/or imprecise ([webpack/webpack#5491](https://github.com/webpack/webpack/issues/5491))

- `"targets": "node 12"` will emit ESNext compatible with Node 12+ only

- `node .` start script works because of `"main": "dist/main.js"` field in `package.json`
  - this makes `__dirname` the root of the project, so that `/public` can be resolved [without](https://github.com/webpack/webpack-dev-middleware/issues/189#issuecomment-310769620) `node: { __dirname: false }`
  - in other words, before ``express.static(`${__dirname}/public`)`` and after `express.static('public')`

## Live reload

You could auto-reload the browser when front-end and/or back-end code changes.

### FE

- [`reload` CLI](https://npm.im/reload#using-reload-as-a-command-line-application)
  - won't work with SSR unless you emit `index.html` in watch dir; runs a separate server

- [`webpack-dev-server`](https://npm.im/webpack-dev-server)
  - won't work with SSR unless you emit `index.html` in watch dir; runs a separate server

- [`webpack-livereload-plugin`](https://npm.im/webpack-livereload-plugin)
  - plugin under client config; runs a separate server with WS

### BE

- [`reload` in Express](https://npm.im/reload#using-reload-in-express)
  - ignores changes in FE code, e.g. `src/client.js` entrypoint, and (S)CSS files

- [`webpack-dev-middleware`](https://npm.im/webpack-dev-middleware)
  - manual & verbose setup; see [`react-ssr-setup`](https://github.com/manuelbieh/react-ssr-setup) for a working example
  - [`webpack-hot-middleware`](https://npm.im/webpack-hot-middleware) [doesn't work](https://github.com/webpack-contrib/webpack-hot-middleware/issues/292) with Webpack 4

### FE & BE

- [`webpack-isomorphic-dev-middleware`](https://npm.im/webpack-isomorphic-dev-middleware)
  - reloads on both client & server changes

- [`universal-hot-reload`](https://npm.im/universal-hot-reload)
  - reloads on both client & server changes

Other options include [`browser-sync`](https://npm.im/browser-sync) ([tutorial](https://medium.com/@svinkle/start-a-local-live-reload-web-server-with-one-command-72f99bc6e855)), [`livereload`](https://npm.im/livereload), and [`chokidar`](https://npm.im/chokidar). When using with a stand-alone Express server, you'd want to `wait-on dist` first.

## Asset manifest

If you need to read `manifest.json` in `development`, you can't `import()` it with Webpack, but you could do

```js
// fs.watch won't work on manifest.json, as it doesn't exist yet
fs.watchFile('public/manifest.json', { interval: 100 }, async (curr, prev) => {
  if (curr.isFile()) {
    // File created. Start the server...
  }
})
```

You could also use [`wait-on`](https://npm.im/wait-on#nodejs-api-usage), but beware of `delay` and `interval` times.

## Todo

Other things to consider:

- minimize & auto-prefix CSS
- cache users to avoid re-fetches when switching pages
- code-splitting / route-based chunk loading
