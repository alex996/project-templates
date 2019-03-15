# react-webpack

React 16 + Webpack 4 + Babel 7 template for SPAs.

## Setup

1. Clone the repo
```sh
git clone https://github.com/alex996/project-templates.git && cd project-templates
```

2. Choose a template
```sh
cd react-webpack
```

3. Install the deps
```sh
npm i
```

4. Run the dev server
```sh
npm start
```

## CLI

### `npm start`

Launch a dev server at `localhost:3000` and watch file changes.

### `npm run build`

Build a production bundle in `dist` folder.

### `npm run stats`

Visualize the dependency tree from a build.

### `npm run serve`

> Tip: use this with `npm run build` to have a peek at your prod build.

Serve up the contents of `dist` folder.

## Tweaks

Don't forget to fine-tune

- [`devtool`](https://webpack.js.org/configuration/devtool/) (source-map)

- [`browserlist`](https://github.com/browserslist/browserslist) support

- [`@babel/polyfill`](https://babeljs.io/docs/en/babel-polyfill)

- `meta` / `link` tags (e.g. [`react-helmet`](https://github.com/nfl/react-helmet))

- linter (e.g. [`standard`](https://standardjs.com/))

- test suite (e.g. [`jest`](https://jestjs.io/) or [`ava`](https://github.com/avajs/ava))

- [HMR](https://webpack.js.org/concepts/hot-module-replacement/) with [`react-hot-loader`](https://github.com/gaearon/react-hot-loader#getting-started)
