# Framer Bridge Starter Kit

Framer Bridge is a suite of tools:

- That allows you to automatically publish and distribute components to
  designers with [Framer](https://framer.com) and the
  [Framer Store](https://store.framer.com).
- Import in production components built by your engineers. It’s an
  automatic and continually synced workflow, one that is customizable to
  your existing development workflow.

This repository links together
[folder backed Framer projects](https://www.framer.com/support/using-framer-x/folder-backed-projects/)
with the [Framer CLI](https://www.npmjs.com/package/framer-cli) and
[GitHub actions](https://github.com/framer/PublishAction) for an easy
package publication flow.

## 🏁 Getting started

#### Repository

- Run `yarn framer:install` to install dependencies

At the root of the repository, you will find:

- **[`design-system.framerfx`](/design-system.framerfx):** a
  [folder backed project](https://framer.gitbook.io/teams/integrations#folder-projects)
  that imports the components from the
  [components package](/packages/components) and (optionally) adds
  [interface properties](https://www.framer.com/api/property-controls/)
  to use in Framer. This is the project that gets published to the
  [Framer store](https://store.framer.com).

#### Editing

From here, you can continue modifying the existing
[`design-system.framerfx`](/design-system.framerfx) file. If you edit
any of the components in the [`production code`](/packages/components),
they will automatically get updated in Framer too.

#### Publishing

1. From the terminal, run:

   ```sh
   npx framer-cli authenticate <your-framer-account-email>
   ```
2. export the provided framer token in `~/.bashrc`:

   ```sh
   export FRAMER_TOKEN=<token>
   ```

3. **If the package has not been previously published to the store**,
    publish the package for the first time by running

   ```sh
   yarn framer:publish --new="<Display Name>"
   ```

## 🤖 Using GitHub actions

You can use this repository to automate the deployment of your Framer
package to the store without needing any external services.

1. Modify the `args` property in the `Build` and `Publish` actions
   inside
   [`.github/workflows/publish-framer.yml`](/.github/workflows/publish-framer.yml)
   with the path of your Framer package, eg:

   ```yaml
   on:
     push:
       branches: master
   name: Build and publish
   jobs:
     publish:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@master

         - name: Build
           uses: framer/bridge@master
           env:
             FRAMER_TOKEN: ${{ secrets.FRAMER_TOKEN }}
           with:
             args: build design-system.framerfx

         - name: Publish
           uses: framer/bridge@master
           env:
             FRAMER_TOKEN: ${{ secrets.FRAMER_TOKEN }}
           with:
             args: publish design-system.framerfx --yes
   ```

2. In GitHub, navigate to the forked repository, and under your
   repository name, click _Settings_. Then, click _Secrets_ in the left
   sidebar, and add the `FRAMER_TOKEN` secret.
3. Push a commit to the `master` branch and watch as the GitHub actions
   pick up the commit, build the package, publish it to the
   [Framer Store](https://store.framer.com).

## 🚚 Using CI

As an example of integrating `framer-cli` with an external CI service,
there is a small
[CircleCI configuration](https://circleci.com/docs/2.0/configuration-reference)
included in this repository that publishes the given package to the
[Framer store](https://store.framer.com) every time a commit is made to
the `master` branch.

**To integrate with CircleCI:**

1. [Connect your repository with CircleCI](https://circleci.com/integrations/github/).
2. Add the `FRAMER_TOKEN` environment variable in the
   [CI project settings](https://circleci.com/docs/2.0/env-vars/#setting-an-environment-variable-in-a-project).
3. Update the `.circleci/config.yml` with your project path, e.g.:

   ```yml
   # Javascript Node CircleCI 2.0 configuration file
   #
   # Check https://circleci.com/docs/2.0/language-javascript/ for more details
   #
   version: 2
   jobs:
     publish:
       docker:
         - image: circleci/node:10

       working_directory: ~/repo

       steps:
         - checkout
         - run: yarn
         - run: npx framer-cli publish <your-project-path.framerfx> --yes

   workflows:
     version: 2
     publish:
       jobs:
         - build
         - publish:
             filters:
               branches:
                 only: master
   ```

4. Publish a brand new version of your package to the
   [Framer store](https://store.framer.com) by pushing a commit on the
   `master` branch.

