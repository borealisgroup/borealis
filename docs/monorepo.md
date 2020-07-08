# Lerna

### Installing Dependencies

```bash
yarn workspace <package1> add <package2>
```

Use `-W` to install for the **entire workspace**:

```bash
yarn add -D -W <package>
```

### Linking Sibling Packages

By specifying the version here, Yarn will install the local dependency that hasn’t been published to npm yet.

```bash
yarn workspace <package1> add <package2@0.1.0>
```

### Create a new package

Use our plop generator:

```bash
yarn generate package
```

## Patterns

### Create a new pattern

```bash
yarn generate pattern
```