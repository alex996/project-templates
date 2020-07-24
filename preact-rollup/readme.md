# preact-rollup

Preact 8 + Rollup 1.x + Babel 7 template for SPAs.

## Setup

1. Clone the repo
```sh
git clone https://github.com/alex996/project-templates.git && cd project-templates
```

2. Choose a template
```sh
cd preact-rollup
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

Launch a dev server at `localhost:3000` and reload on file changes.

### `npm run build`

Build a production bundle in `dist` folder.

### `npm run serve`

Serve production assets on localhost.

## Tweaks

Don't forget to fine-tune

- bundle visualizer (e.g. [`rollup-plugin-visualizer`](https://www.npmjs.com/package/rollup-plugin-visualizer) or [`source-map-explorer`](https://www.npmjs.com/package/source-map-explorer))

- hashname (e.g. [`rollup-plugin-hash`](https://www.npmjs.com/package/rollup-plugin-hash) or [built-in](https://twitter.com/rich_harris/status/1079991930623283200?lang=en))

- [`browserlist`](https://github.com/browserslist/browserslist) support

- [`@babel/polyfill`](https://babeljs.io/docs/en/babel-polyfill)

- `meta` / `link` tags (e.g. [`preact-helmet`](https://github.com/Download/preact-helmet))

- linter (e.g. [`standard`](https://standardjs.com/))

- test suite (e.g. [`jest`](https://jestjs.io/) or [`ava`](https://github.com/avajs/ava))
