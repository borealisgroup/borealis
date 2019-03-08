# borealis-js

A collection of patterns, libraries and boilerplates in Borealis Digital Studio.

## Libraries

> There is no straight answer for React. You need to collect blocks by yourself. There are many ways you can build an app, but it’s you who needs to decide what to use.

Why React chose to be a library instead of a framework? It goes with its own philosophy of how to build apps. In one word: **flexibility**.

The Javascript ecosystem is rapidly evolving and we want to be part of this journey by experimenting the latest trends.

## Patterns

We provide a list of patterns including examples. Following React's philosophy, there is a clear separation of concerns to make multiple patterns usable altogether. 

## Boilerplates

In fact, the all-in-one perfect boilerplate doesn't exist. 

However, we consider our boilerplates as proposals of starting-point template for a new project. Each boilerplate links together some of our libraries and patterns.

## Monorepo

We're using [lerna](https://github.com/lerna/lerna) to share everything in a monorepo.

**Pros:**

- Single lint, build, test and release process.
- Easy to coordinate changes across modules.
- Single place to report issues.
- Easier to setup a development environment.
- Tests across modules are run together which finds bugs that touch multiple modules easier.
- Sharing modules easily.

**Cons:**

- Codebase looks more intimidating.
- Repo is bigger in size.

## License

[MIT](LICENSE)
