# react-babel-typescript

React 16.8.x + Webpack 4 + Babel 7 + Typescript 3.5.x template using `@babel/preset-typescript`.

## Notes

- Babel + TS is the combo CRA uses to co-exist with vanilla JS setup
- This approach has the added benefit of granular control over browser targets
- It uses `@babel/preset-react`, but could also use `"jsx": "react"` instead
- Type checking is done via `fork-ts-checker-webpack-plugin`, it
  - doesn't block transpilation as in `ts-loader`
  - may lag behind `weback` since it runs async-ly
  - could also be done with `tsc --watch`

## Setup

1. Clone the repo
```sh
git clone https://github.com/alex996/project-templates.git && cd project-templates
```

2. Choose a template
```sh
cd react-babel-typescript
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

If you notice reload times degrade, try adding `"skipLibCheck": true,` to `tsconfig.json`.

## Guides

- [TypeScript + Babel 7](https://devblogs.microsoft.com/typescript/typescript-and-babel-7/)

- [Why](https://vincenttunru.com/why-combine-babel-and-typescript/) and [How](https://iamturns.com/typescript-babel/)
