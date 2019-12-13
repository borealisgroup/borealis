# @borealisgroup/absolute-paths

Absolute paths for imports

## Prerequisites

- create-react-app

## Usage

### cross-env

Install `cross-env` as a dev dependency

```bash
yarn -D cross-env
```

Add `cross-env NODE_PATH=src` in your `package.json`.

```bash
"start": "cross-env NODE_PATH=src react-scripts start",
```

### Jest

Add `--modulePaths=src` to the end of the test script in your `package.json`.

```json
"test": "react-scripts test --env=jsdom --modulePaths=src",
```

### VSCode path autocopmlete

At the project root, create `jsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES6",
    "baseUrl": "./src"
  },
  "exclude": ["node_modules", "build"]
}
```

### ESLint import resolver

It is already implemented if you're using [@borealisgroup/eslint-config](https://www.npmjs.com/package/@borealisgroup/eslint-config). Otherwise, add this in `.eslintrc.js`:

```js
  // ...
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src'],
      },
    },
  },
  // ...
```

## Why

```js
// what we want
import reducer from 'reducer';

// what we don't want
import reducer from '../../../reducer';
```

- more readable
- easier to refactor: if you change the location of a file, you don’t have to refactor its relative imports.
