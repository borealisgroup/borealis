# borealis

This is a monorepo containing reusable packages, apps and patterns.

## 🚀 Included

- 🐈 Yarn Workspaces — Sane multi-package management
- 🐉 Lerna 3 — The Monorepo manager
- 🐠 Babel — Compiles next-gen JavaScript
- 📦 Rollup — Next-generation ES module bundler
- 📖 Storybook 5 – The developer playground
- 🌈 Framer X — The prototyping tool for teams

<!--
- ⚛️ Create React App 3
✨ Host Multiple CRA Apps, Component Libraries & Storybooks in one Monorepo
🔥 Hot Reload all Apps, Components & Storybooks
👨‍🔬 Test all workspaces with Eslint & Jest using one command
:octocat: Deploy your apps to Github Pages using one command -->

## 🚄 Monorepo

[Lerna](https://lerna.js.org) and
[Yarn Workspaces](https://yarnpkg.com/lang/en/docs/workspaces/) give us
the ability to build libraries and apps in a single repo (a.k.a.
Monorepo) without forcing us to publish to NPM until we are ready. This
makes it faster to iterate locally when building components that depend
on each other.

Lerna also provides high-level commands to optimize the management of
multiple packages. For example, with one Lerna command, you can iterate
through all the packages, running a series of operations (such as
linting, testing, and building) on each package.
[Read our monorepo guide](/docs/monorepo.md).

In order to improve our development practices and standards we released
various packages. If you find any of the packages useful you can easily
import them via npm.

## 🌈 Framer X

Framer X is suite of tools that connects our design system to production
code. [Read our Framer guide](/docs/framer.md).

## 📚 Patterns

We provide a list of patterns including examples. There is a clear
separation of concerns to make multiple patterns usable altogether.

<!-- - ⚛️ React — JavaScript library for user interfaces
- 💅 styled-components — CSS in JS elegance
- 📖 Storybook — UI Component Environment
- 🃏 Jest — Unit/Snapshot Testing -->

## 👏 Contributing

We welcome contributions to this repository! Read our
[pull request guide](/docs/pull_request.md) and
[our release guide](docs/release.md).

### Install

Get started by cloning and installing the packages:

```bash
git clone https://github.com/borealisgroup/borealis.git
cd borealis
yarn
```

## License

[MIT](LICENSE)
