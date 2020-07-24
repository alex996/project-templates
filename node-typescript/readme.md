# node-typescript

Node.js + TypeScript template for a web server. Includes ESLint & Prettier auto-formatting.

## Setup

1. Clone the repo

```sh
git clone https://github.com/alex996/project-templates.git && cd project-templates
```

2. Choose a template

```sh
cd node-typescript
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

Compile TypeScript into JavaScript/CommonJS in `dist` folder.

### `npm start`

Launch a production-like server from `dist` bundle.

### `npm run lint` / `npm run lint:fix`

Run source through ESLint / and fix linting.

### `npm run format`

Run source through Prettier.

## Nodemon

Assuming `src/index.ts` or `dist/index.js` entry file.

### `nodemon` + `ts-node` (slow)

> As of `1.19.0`, nodemon runs `.ts` files with `ts-node` by default.

```sh
npx nodemon -e ts -w src -x ts-node src
```

### `nodemon` + `tsc` (moderate)

```json
"watch": "run-p watch:*",
"watch:ts": "npx tsc -w",
"watch:node": "wait-on dist && npx nodemon -w dist dist"
```

### `ts-node-dev` (fast)

```sh
ts-node-dev --transpile-only --no-notify src
```

## ESLint & Prettier

1. To turn off rules that conflict with Prettier, use [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier)

```json
{
  "extends": ["prettier"]
}
```

2. To apply formatting rules in Prettier, use [`eslint-plugin-prettier`](https://github.com/prettier/eslint-plugin-prettier)

```json
{
  "extends": ["prettier", "plugin:prettier/recommended"]
}
```

3. To resolve conflicts with other ESLint plugins (`@typescript-eslint/eslint-plugin`, `eslint-plugin-react`, etc.), add exclusions on a case-by-case basis

```json
{
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react"
  ]
}
```

4. To disable individual rules, consult plugin docs

```json
{
  "rules": {
    "@typescript-eslint/member-delimiter-style": "off"
  }
}
```

## VS Code

- `"editor.formatOnSave": true` formats files (including `.json`, `.md`, etc.) on file save (`Ctrl+S`)
- `"editor.codeActionsOnSave": { "source.fixAll": true }` applies [Auto Fix for all providers](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint#release-notes) including ESLint

## Tweaks

> See more at [awesome-nodejs](https://github.com/sindresorhus/awesome-nodejs)

- unit/integration tests with

  - Jest

  ```js
  // jest.config.js
  module.exports = { preset: 'ts-jest', testEnvironment: 'node' }
  ```

  - Mocha

  ```sh
  mocha -r ts-node/register src/**/__tests__/*.ts
  ```

- logging ([morgan](https://npm.im/morgan), [debug](https://npm.im/debug), etc.)
- security ([lusca](https://npm.im/lusca), [helmet](https://npm.im/helmet), etc.)
- error handling

## References

- `prettier` + `eslint` [integration](https://prettier.io/docs/en/integrating-with-linters.html#eslint)
  - see list of [all errors](https://eslint.org/docs/rules/) and [example config file](https://github.com/prettier/eslint-config-prettier#example-configuration)
- `typescript` + `node` [example repo](https://github.com/Microsoft/TypeScript-Node-Starter)
