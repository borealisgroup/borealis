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

Use [lerna](https://github.com/lerna/lerna/tree/master/commands/create#readme) CLI:

```bash
lerna create <name> [loc]
```

## Pull Request Process

1. Ensure any install or build dependencies are removed before the end of the layer when doing a
   build.
2. Update the README.md with details of changes to the interface, this includes new environment
   variables, exposed ports, useful file locations and container parameters.
3. Increase the version numbers in any examples files and the README.md to the new version that this
   Pull Request would represent. The versioning scheme we use is [SemVer](http://semver.org/).
4. You may merge the Pull Request in once you have the sign-off of two other developers, or if you
   do not have permission to do that, you may request the second reviewer to merge it for you.

## Publish packages

Use [lerna](https://github.com/lerna/lerna/tree/master/commands/publish) CLI:

```
lerna publish              # publish packages that have changed since the last release
```

## More

[Lerna commands](https://github.com/lerna/lerna)
