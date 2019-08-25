# Contributing

- [Contributing](#contributing)
  - [Development Guide](#development-guide)
    - [Prerequisites](#prerequisites)
    - [Initial Setup](#initial-setup)
    - [Add dependencies to existing packages](#add-dependencies-to-existing-packages)
    - [Add a new package](#add-a-new-package)
    - [Testing locally](#testing-locally)
  - [Patterns](#patterns)
    - [Add a new pattern](#add-a-new-pattern)
  - [Pull Requests](#pull-requests)
    - [Commits](#commits)
    - [PRs](#prs)
  - [Release Guide](#release-guide)

Contributions are always welcome, no matter how large or small. Before contributing, please read the please read the
[code of conduct](https://github.com/borealisgroup/create-bor-app/master/CODE_OF_CONDUCT.md).

## Development Guide

### Prerequisites

Please have the latest stable versions of the following on your machine:

- node
- yarn

### Initial Setup

```bash
git clone https://github.com/borealisgroup/create-bor-app.git
cd create-bor-app
yarn
```

### Add dependencies to existing packages

Use `-W` to install for the **entire workspace**:

```bash
yarn add -D -W package1 package2
```

NOTE: devDependencies can always be pulled up to the root of a Lerna repo with

```bash
lerna link convert
```

### Add a new package

Use our plop generator:

```bash
yarn generate package
```

### Testing locally

In the project you want to test the package, run:

```bash
yarn install /absolute/path/to/package
```

and that yields this in your `package.json`:

```json
"dependencies": {
  "viking": "file:../create-bor-app/packages/<name>",
},
```

## Patterns

### Add a new pattern

```bash
npm run generate pattern
```

## Pull Requests

### Commits

[Semantic commit messages](https://electronjs.org/docs/development/pull-requests#commit-message-guidelines)

Common prefixes:

- `fix:` A bug fix
- `feat:` A new feature
- `docs:` Documentation changes
- `test:` Adding missing tests or correcting existing tests
- `build:` Changes that affect the build system
- `ci:` Changes to our CI configuration files and scripts
- `perf:` A code change that improves performance
- `refactor:` A code change that neither fixes a bug nor adds a feature
- `style:` Changes that do not affect the meaning of the code (linting)
- `vendor:` Bumping a dependency like libchromiumcontent or node

### PRs

1. The prefix of the branch should be the name of the package or pattern to update.
2. Ensure any install or build dependencies are removed before the end of the layer when doing a
   build.
3. Update the README.md with details of changes to the interface, this includes new environment
   variables, exposed ports, useful file locations and container parameters.
4. Increase the version numbers in any examples files and the README.md to the new version that this
   Pull Request would represent. The versioning scheme we use is [SemVer](http://semver.org/).
5. You may merge the Pull Request in once you have the sign-off of two other developers, or if you
   do not have permission to do that, you may request the second reviewer to merge it for you.

## Release Guide

NOTE: The very first time you publish a scoped package you need to make sure that it's package.json contains the following:

```json
"publishConfig": {
  "access": "public"
}
```

Using eslint, babel and [lerna](https://github.com/lerna/lerna/tree/master/commands/publish) CLI, each release will lint, build and publish packages that have changed since the last release:

**Prerelease**:

```bash
# make sure you current with origin/next.
git checkout next

# publish and tag the release
yarn run publish:next
```

**Release**:

```bash
# make sure you current with origin/master.
git checkout master

# publish and tag the release
yarn run publish
```
