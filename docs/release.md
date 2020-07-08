
## Release Guide

NOTE: The very first time you publish a scoped package you need to make sure that it's package.json contains the following:

```
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