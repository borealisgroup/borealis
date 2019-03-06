# @borealisgroup/dynamic-export

Utility to dynamically export all files matching a regular expression.

## Prerequisites

## Install

Using npm:

```
npm install --save @borealisgroup/dynamic-export
```

## Prerequisites

- webpack

## Usage

In the `index.js` you want to export all files matching a regular expression.

```
const autoExport = require('dynamic-export');
```

## Description

It uses [require-context() from webpack](https://webpack.js.org/guides/dependency-management/#require-context):

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

As a result, it increases development flexibility and reduces a lot of boilerplate.
