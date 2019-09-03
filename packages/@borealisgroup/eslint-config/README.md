# @borealisgroup/eslint-config

ESLint config for JS linting.

## Prerequisites

- react or node environment
- usage of jest as the test-suite (if any)
- `env`: Browser and Node environment
- `parser`: usage of babel (babel-eslint parser)
- if you don't use `create-react-app`, you have to install `eslint`

Note: you can still overwrite the `env`, `globals` and `parser` in your local `.eslintrc.js`.

## Install

Using npm:

```bash
npm install --save-dev @borealisgroup/eslint-config
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
- [x] Enable Editor: Format on save (Prettier)
- [x] Enable Prettier: ESLint Integration
- [x] Enable ESLint: Auto Fix on save

## ESLint

### Plugins

- airbnb: one of the most widely used code styles for ECMAScript 6+ and React.

### Rules

### Next Plugins to evaluate

The following plugins need to be tested before being added.
From [awesome-eslint](https://github.com/dustinspecker/awesome-eslint):

- [Node](https://github.com/mysticatea/eslint-plugin-node) - Linting rules for Node.js (checking importing paths, ES syntax, ...).
- [GraphQL](https://github.com/apollographql/eslint-plugin-graphql) - Check your GraphQL query strings against a schema.
- [SQL](https://github.com/gajus/eslint-plugin-sql) - SQL linting rules for ESLint.
- [HTML](https://github.com/BenoitZugmeyer/eslint-plugin-html) - Linting for JavaScript inside of HTML script tags.

## Prettier

This ESLint configuration can work together with prettier, thanks to `eslint-plugin-prettier`

## Why

[Why do we need a shared coding style accross the company?](https://medium.com/@natterstefan/how-to-create-your-own-shared-eslint-prettier-and-stylelint-configuration-3930dd764de3)

TL;DR - For **consistency**, **productivity** and **happiness**.

## Contributing

If you want to modify plugins or rules in your project, please submit a pull request instead of overwriting your local config.

For each addition, add a justification in this README.
