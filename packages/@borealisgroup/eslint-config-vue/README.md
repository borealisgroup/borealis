# @borealisgroup/eslint-config-vue

ESLint config for Vue JS linting.

## Prerequisites

See [@borealisgroup/eslint-config](https://www.npmjs.com/package/@borealisgroup/eslint-config) prerequisites

## Install

Using npm:

```bash
yarn -D @borealisgroup/eslint-config-vue
```

## Usage

Create a file `.eslintrc.js` at the root of your project:

```js
module.exports = {
  extends: '@borealisgroup/eslint-config-vue',
};
```

See also [@borealisgroup/eslint-config](https://www.npmjs.com/package/@borealisgroup/eslint-config) usage

## ESLint

### Parser

- `vue-eslint-parser`

### Plugins

- `plugin:vue/recommended`
- `prettier/vue` - Prettier support

## Contributing

If you want to modify plugins or general rules in your project, please submit a pull request with a justification instead of overwriting your local config.
