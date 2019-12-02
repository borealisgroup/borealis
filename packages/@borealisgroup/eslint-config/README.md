# @borealisgroup/eslint-config

ESLint config for JS linting.

## Prerequisites

- `react` or `node` environment
- usage of `jest` as the test-suite (if any)
- if you don't use `create-react-app`, you have to install `eslint`

Note: you can still overwrite the `env`, `globals` and `parser` in your local `.eslintrc.js`.

## Install

Using npm:

```bash
yarn -D @borealisgroup/eslint-config
```

## Usage

Create a file `.eslintrc.js` at the root of your project:

```js
module.exports = {
  extends: '@borealisgroup',
};
```

If not already done, in your editor (e.g. VSCode):

- [x] Enable ESLint: Run the linter on type
- [x] Enable ESLint: Auto Fix on save
- [ ] Disable Editor: Format on save (Prettier)

## ESLint

### Parser

- `babel-eslint`

### Plugins

- `airbnb`: one of the most widely used code styles for ECMAScript 6+ and React.

### Rules

- TODO

## Prettier

This ESLint configuration can work together with prettier, thanks to `eslint-plugin-prettier`

## Why

[Why do we need a shared coding style accross the company?](https://medium.com/@natterstefan/how-to-create-your-own-shared-eslint-prettier-and-stylelint-configuration-3930dd764de3)

TL;DR - For **consistency**, **productivity** and **happiness**.

## Contributing

If you want to modify plugins or general rules in your project, please submit a pull request with a justification instead of overwriting your local config.

See [awesome-eslint](https://github.com/dustinspecker/awesome-eslint) for more plugins.
