# @borealisgroup/dynamic-export

Utility to dynamically export all files matching a regular expression.

## Prerequisites

- webpack

## Install

Using npm:

```
npm install --save @borealisgroup/dynamic-export
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
