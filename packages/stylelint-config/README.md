# @borealisgroup/stylelint-config

Stylelint config for CSS linting.

## Getting Started

### Prerequisites

- React environment
- styled-components

### Install

Using npm:

```
npm install --save-dev @borealisgroup/stylelint-config
```

Create a file `stylelint.config.js` at the root of your project:

```js
module.exports = require("@borealisgroup/stylelint-config");
```

## Stylelint

### Plugins

- `stylelint-config-standard` - [rules](https://github.com/stylelint/stylelint-config-standard)
- `stylelint-config-styled-components` - to disable stylelint rules that clash with styled-components

- `stylelint-config-styled-components-processor` - to extract styles from styled-components

### Rules

- `'block-no-empty': null` - accept styled components with no style, i.e. when we just want to use named components for readability.

## Contributing

If you want to modify plugins or rules in your project, please submit a pull request instead of overwriting your local config.

For each addition, add a justification in this README.
