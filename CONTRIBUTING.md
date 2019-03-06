# Contributing

Contributions are always welcome, no matter how large or small. Before contributing, please read the please read the
[code of conduct](https://github.com/borealisgroup/borealis-js/master/CODE_OF_CONDUCT.md).

## Developing

Make sure that [lerna](https://github.com/lerna/lerna) is installed globally:

```bash
npm install lerna -g
```

### Setup

```bash
git clone https://github.com/borealisgroup/borealis-js
cd borealis-js
lerna bootstrap --hoist
```

### Create a new package

Use our plop generator:

```bash
npm run generate package
```

Once ready to be published:

```bash
cd /packages/<name>
npm publish --access public
```

### Testing locally

In the project you want to test the package, run:

```
npm install /absolute/path/to/package
```

and that yields this in your `package.json`:

```json
"dependencies": {
  "viking": "file:../borealis-js/packages/<name>",
},
```

Don't forget to update the dependency once you publish the package.

## Commits

[Semantic commit messages](https://electronjs.org/docs/development/pull-requests#commit-message-guidelines)

Common prefixes:

- fix: A bug fix
- feat: A new feature
- docs: Documentation changes
- test: Adding missing tests or correcting existing tests
- build: Changes that affect the build system
- ci: Changes to our CI configuration files and scripts
- perf: A code change that improves performance
- refactor: A code change that neither fixes a bug nor adds a feature
- style: Changes that do not affect the meaning of the code (linting)
- vendor: Bumping a dependency like libchromiumcontent or node
- chore: Changes to the build process or auxiliary tools and libraries such as documentation generation; no production code change; nothing that an external user would see

## Pull Request Process

1. Ensure any install or build dependencies are removed before the end of the layer when doing a
   build.
2. Update the README.md with details of changes to the interface, this includes new environment
   variables, exposed ports, useful file locations and container parameters.
3. Increase the version numbers in any examples files and the README.md to the new version that this
   Pull Request would represent. The versioning scheme we use is [SemVer](http://semver.org/).
4. You may merge the Pull Request in once you have the sign-off of two other developers, or if you
   do not have permission to do that, you may request the second reviewer to merge it for you.

## Publish existing packages

Use [lerna](https://github.com/lerna/lerna/tree/master/commands/publish) CLI:

```
lerna publish              # publish packages that have changed since the last release
```

## More

[Lerna commands](https://github.com/lerna/lerna)
