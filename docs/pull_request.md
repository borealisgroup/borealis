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
