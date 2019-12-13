# @borealisgroup/dynamic-export

> This is no longer supported, please consider using static exports in `index.js` instead. The problem is that the script file doing the dynamic export should be executed before the files using the components. And it's something we can't control. The [Conclusion](#Conclusion) is still interesting to read.

Utility to dynamically export all files matching a regular expression.

## Prerequisites

- webpack

## Install

Using npm:

```bash
yarn add @borealisgroup/dynamic-export
```

## Usage

To export all files matching a regular expression, create an `index.js` in the concerning directory:

```js
const { getModules } = require('@borealisgroup/dynamic-export');

Object.assign(module.exports, getModules(require.context('.', true, /\.jsx$/)));
```

For example, in a React app, it's useful to have this `index.js` in the `components` and `containers` directories, by taking all the `.jsx` files.

Then, you can import the modules:

<!-- TODO - in example -->

```js
import {
  Header,
  Content,
  Footer,
  // etc.
} from 'components';
```

## Why

Using [require-context() from webpack](https://webpack.js.org/guides/dependency-management/#require-context):

> It allows you to pass in a directory to search, a flag indicating whether subdirectories should be searched too, and a regular expression to match files against.
>
> webpack parses for require.context() in the code while building.
>
> This can be useful if you want to require all files in a directory or matching a pattern

After importing all files you want in `index.js`, you export them using the filename (named exports).

When running your app in watch mode, considering that the file is located in `index.js` (sub)directory and is matching the given regex, it will automatically handle these cases:

- add a new file
- move a file into another directory
- renaming a file
- delete a file
  - you may have to restart the app in that case

As a result, it improves the development flow and reduces a lot of boilerplate.

Now, let's compare the re-exporting cases

### re-export default import as named import (dynamic)

Advised for large and very active directories. See [Why](#Why).

### re-export default import as named import (static)

Advised.

```js
export { default as App } from './App';
export { default as Header } from './Header';
```

### re-export all named imports (static)

Advised. This is quite good if you want to centralize (in `index.js`) the (unique) named exports from multiple files.

```js
export * from './A';
export * from './B';
```

### re-export default import as default export (static)

Discouraged. See [Conclusion](#Conclusion). Default export should be mostly used for classes (i.e. React component).

```js
export { default } from './config';
```

## Conclusion

Although **dynamic re-export** has a productivity boost, it has counterparts showing that it should not be used in every `index.js` files.

Also, we discourage using **default export of non-class objects** when possible.

The reason is that in these cases, we can't use these development features, which are also a huge productivity boost:

### ❌ VSCode: Auto Import - ES6, TS, JSX, TSX (extension)

> Automatically finds, parses and provides code actions and code completion for all available imports.

### ❌ VSCode: Refactoring - updateImportsOnFileMove

> VS Code can automatically update import paths when a JavaScript file is moved or renamed

### ❌ ESLint: import/named

> Verifies that all named imports are part of the set of named exports in the referenced module.
>
> For export, verifies that all named exports exist in the referenced module.

### ❌ Webpack: [Tree Shaking](https://webpack.js.org/guides/tree-shaking/)

> Tree shaking is a term commonly used in the JavaScript context for dead-code elimination
> Sometimes you can be tempted to export one huge object with many properties as default export. This is an anti-pattern and prohibits proper tree shaking.
>
> Using named exports can reduce your bundle size when you don’t use all exported values (especially useful while building libs).
