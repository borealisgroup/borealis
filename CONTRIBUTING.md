# Contributing

- [Contributing](#contributing)
  - [Development Guide](#development-guide)
    - [Prerequisites](#prerequisites)
    - [Initial Setup](#initial-setup)
    - [Installing Dependencies](#installing-dependencies)
    - [Remove Dependencies](#remove-dependencies)
    - [Linking Sibling Packages](#linking-sibling-packages)
    - [Create a new package](#create-a-new-package)
  - [Patterns](#patterns)
    - [Create a new pattern](#create-a-new-pattern)
  - [Pull Requests](#pull-requests)
    - [Commits](#commits)
    - [PRs](#prs)
  - [Release Guide](#release-guide)
  - [Lerna](#lerna)

Contributions are always welcome, no matter how large or small. Before contributing, please read the please read the
[code of conduct](https://github.com/borealisgroup/borealis/master/CODE_OF_CONDUCT.md).

## Development Guide

### Prerequisites

Please have the latest stable versions of the following on your machine:

- node
- yarn

### Initial Setup

```bash
git clone https://github.com/borealisgroup/borealis.git
cd borealis
yarn
```

### Installing Dependencies

```bash
yarn workspace package1 add package2
```

Use `-W` to install for the **entire workspace**:

```bash
yarn add -D -W package1 package2
```

NOTE: devDependencies can always be pulled up to the root of a Lerna repo with

```bash
npx lerna link convert
```

### Remove Dependencies

```bash
yarn workspace package1 remove package2
```

### Linking Sibling Packages

By specifying the version here, Yarn will install the local dependency that hasn’t been published to npm yet.

```bash
yarn workspace package1 add package2@0.1.0
```

### Create a new package

Use our plop generator:

```bash
yarn generate package
```

## Patterns

### Create a new pattern

```bash
npm run generate pattern
```

## Pull Requests

### Commits

[Semantic commit messages](https://www.conventionalcommits.org/en/v1.0.0-beta.4/)

The following commits will automatically generate CHANGELOGs, to communicate intent to the consumers of your library:

- `fix:` patches a bug
- `feat:` introduces a new feature
- `BREAKING CHANGE:` introduces a breaking API change

Other commit types not mandated by the conventional commits specification, and have no implicit effect in semantic versioning, unless they include a BREAKING CHANGE:

- `improvement:` improve a current implementation without adding a new feature or fixing a bug
- `perf:` improves performance
- `refactor:` refactoring
- `style:` linting
- `docs:` documentation changes
- `vendor:` bumping a dependency
- `test:` adding missing tests or correcting existing tests
- `build:` changes that affect the build system
- `ci:` changes to our CI configuration files and scripts
- `chore:` for all the remaining cases: e.g. updating configuration; no production code change

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
yarn pre-release
```

**Release**:

```bash
yarn release
```

**Graduate**:

"Graduating" a package means bumping to the non-prerelease variant of a prerelease version
eg. package-1@1.0.0-alpha.0 => package-1@0.1.0

```bash
yarn graduate
```

## Lerna

- `lerna changed` - Show which packages have changed.
- `lerna diff` - Show specifically what files have cause the packages to change.
