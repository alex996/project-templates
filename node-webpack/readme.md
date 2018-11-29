# node-webpack

Node.js + Webpack 4 template for server-side APIs and apps.

## Setup

1. Clone the repo
```sh
git clone https://github.com/alex996/project-templates.git && cd project-templates
```

2. Choose a template
```sh
cd node-webpack
```

3. Install the deps
```sh
npm i
```

4. Run the dev server
```sh
npm run dev
```

## CLI

### `npm run dev`

Launch a dev server at `localhost:3000` and watch file changes.

### `npm run build`

Build a production bundle in `dist` folder.

### `npm start`

Launch a production-like server from `dist` bundle.

## Tweaks

Don't forget to fine-tune

- source map (see `source-map-support`)
- env. vars (e.g. `dotenv`)
- FE reload (e.g. [`webpack-livereload-plugin`](https://www.npmjs.com/package/webpack-livereload-plugin))

## Babel

I often see Node projects using Babel. This _can_ be useful if you want to use bleeding-edge next gen features. That's about the only reasoning for it. In most cases, you **don't** need to use Babel with Node, because

- Node has 99% [native support](https://node.green) for ES2015-19+
  - `async`/`await`, rest/spead, destructuring, etc.

- Finished [Stage 4 proposals](https://github.com/tc39/proposals/blob/master/finished-proposals.md) land within a frequent [release cycle](https://github.com/nodejs/Release#release-schedule)

- `import/export` syntax can be enabled with [`esm`](https://github.com/standard-things/esm)
  - do note that it incurs a small runtime cost though
  - otherwise, you could bundle them, e.g. with `webpack`

- ES6 modules are behind an [experimental flag](https://nodejs.org/api/esm.html) and will be supported natively

If you _do_ insist on transpiling your code, be sure to target the right Node version, so you don't accidentally transpile already-supported features, like `async`/`await`.

```json
"presets": [
  [
    "@babel/env",
    {
      "targets": {
        "node": "10"
      }
    }
  ]
]
```
