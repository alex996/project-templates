# react-typescript

React 16.8.x + Webpack 4 + Typescript 3.5.x template using `ts-loader`.

## Setup

1. Clone the repo
```sh
git clone https://github.com/alex996/project-templates.git && cd project-templates
```

2. Choose a template
```sh
cd react-typescript
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

### `npm run serve`

> Tip: use this with `npm run build` to have a peek at your prod build.

Serve up the contents of `dist` folder.

## Optimization

Build time scales linearly as the codebase grows. To speed it up, try to:

- turn off type checking in `ts-loader`

```diff
module: {
  rules: [{
    test: /\.tsx?$/,
    loader: 'ts-loader',
    exclude: /node_modules/,
+   options: {
+     transpileOnly: true
+   }
  }]
},
```

- move type checking to [`fork-ts-checker-webpack-plugin`](https://github.com/TypeStrong/fork-ts-checker-webpack-plugin)

> `async` and `useTypescriptIncrementalApi` are `true` by default ATM

```diff
plugins: [
+ plugins: [new ForkTsCheckerWebpackPlugin()]
]
```

- turn off type checking of declaration files `*.d.ts` in libraries (see [implications](https://stackoverflow.com/a/56268670))

```diff
+ skipLibCheck: true
```

To avoid slow reload times, keep in mind that

- tree shaking is disabled in `development` mode; if you import a module from a barrel file, the _entire_ library will get bundled

- with icon libraries (e.g. `@material-ui/icons`), you might incur duplicated CJS and ESM exports in dev

## Guides

- [TypeScript & Webpack](https://webpack.js.org/guides/typescript/)
- [React & Webpack](https://webpack.js.org/guides/typescript/)
