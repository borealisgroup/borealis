# Contributing

Contributions are always welcome, no matter how large or small. Before contributing, please read the please read the
[code of conduct](https://github.com/borealisgroup/borealis-js/master/CODE_OF_CONDUCT.md).

## Packages

Make sure that [lerna](https://github.com/lerna/lerna) is installed globally:

```bash
npm install lerna -g
```

### Setup

Clone the repository.

```bash
git clone https://github.com/borealisgroup/borealis-js
cd borealis-js
```

Bootstrap the packages: it installs the dependencies of the packages and links any cross-dependencies

```bash
npm run bootstrap
```

[Hoisting](https://github.com/lerna/lerna/blob/master/doc/hoist.md) is basically doing that:
> Common dependencies will be installed only to the top-level node_modules, and omitted from individual package node_modules.

### Add a new package

Use our plop generator:

```bash
npm run generate package
```

Once ready to be published for the first time:

```bash
cd /packages/<name>
npm publish --access public
```

### devDependencies

devDependencies should be added to the root `package.json`

devDependencies can always be pulled up to the root of a Lerna repo with

```bash
lerna link convert
```

### Testing locally

In the project you want to test the package, run:

```bash
npm install /absolute/path/to/package
```

and that yields this in your `package.json`:

```json
"dependencies": {
  "viking": "file:../borealis-js/packages/<name>",
},
```

### Publish existing packages

Using eslint, babel and [lerna](https://github.com/lerna/lerna/tree/master/commands/publish) CLI, this command will lint, build and publish packages that have changed since the last release:

```bash
npm run release
```

## Patterns

### Add a new pattern

Using plop:

```bash
npm run generate pattern
```

## Commits

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

## Pull Request Process

1. The prefix of the branch should be the name of the package or pattern to update.
2. Ensure any install or build dependencies are removed before the end of the layer when doing a
   build.
3. Update the README.md with details of changes to the interface, this includes new environment
   variables, exposed ports, useful file locations and container parameters.
4. Increase the version numbers in any examples files and the README.md to the new version that this
   Pull Request would represent. The versioning scheme we use is [SemVer](http://semver.org/).
5. You may merge the Pull Request in once you have the sign-off of two other developers, or if you
   do not have permission to do that, you may request the second reviewer to merge it for you.

## More

[Lerna commands](https://github.com/lerna/lerna)
