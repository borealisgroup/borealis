# @borealisgroup/cli

[Description]

## Prerequisites

## Install

```bash
yarn install --save @borealisgroup/cli
```

## Changes

### cli

Removed:

- pnpm
- taobao
- vue-cli-version-marker (~300ms slower)
- `GeneratorAPI.assertCliVersion` for vue-cli compatibility
- `GeneratorAPI.assertCliServiceVersion` for vue-cli compatibility

Added:

- `bin/cli` - require `dotenv`

### cli-service

p11n:

- generators

### cli-shared-utils

- `isPlugin` checks vue-cli and bor-cli plugins

### cli-plugin-vue-core

- generators from `vue-cli-service`
