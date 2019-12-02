# @borealisgroup/eslint-config-ts

ESLint config for TS linting.

## Prerequisites

See [@borealisgroup/eslint-config](https://www.npmjs.com/package/@borealisgroup/eslint-config) prerequisites

## Install

Using npm:

```bash
yarn -D @borealisgroup/eslint-config-ts
```

## Usage

Create a file `.eslintrc.js` at the root of your project:

```js
module.exports = {
  extends: '@borealisgroup/eslint-config-ts',
};
```

See also [@borealisgroup/eslint-config](https://www.npmjs.com/package/@borealisgroup/eslint-config) usage

## ESLint

### Parser

- `@typescript-eslint/parser`

### Plugins

- `plugin:import/typescript`
- `plugin:@typescript-eslint/recommended`
- `prettier/@typescript-eslint` - Prettier support

## Contributing

If you want to modify plugins or general rules in your project, please submit a pull request with a justification instead of overwriting your local config.
