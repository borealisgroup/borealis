# @borealisgroup/cli

[Description]

## Prerequisites

## Install

```bash
yarn install --save @borealisgroup/cli
```

<!-- @vue/cli-(?!shared|plugin-(eslint|pwa|e2e|router|typescript|unit|vuex|babel|test|foo|bar|baz)|overlay) -->

## Changes

### cli

Removed:

- pnpm
- taobao
- vue-cli-version-marker (~300ms slower)
- `GeneratorAPI.assertCliVersion` for vue-cli compatibility
- `GeneratorAPI.assertCliServiceVersion` for vue-cli compatibility

Removed in `Creator`

- `preset.vuex`, `preset.router`
- `resolvePlugins`: remove cli-service generator

Added:

- `bin/cli` - require `dotenv`

### cli-service

p11n:

- generators

### cli-shared-utils

- `isPlugin` checks vue-cli and bor-cli plugins

### cli-plugin-vue-core

- generators from `bor-cli-service`

### cli-ui

- rename title: Borealis Project Manager

`appolo-server > connectors|schema`

- `folders.isVueProject`: g12n to `isProject`
- `projects.importProject`: project type: `vue|bor|unknown`

- `vue.config`: HMR fix: adding `poll`

- `FolderExplorerItem`: if isBorProject, logo react
