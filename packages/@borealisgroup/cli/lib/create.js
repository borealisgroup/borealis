const path = require('path');
const fs = require('fs-extra');
const chalk = require('chalk');
const inquirer = require('inquirer');
const { error, stopSpinner, exit } = require('@vue/cli-shared-utils');
const validateProjectName = require('validate-npm-package-name');
const Creator = require('./Creator');
const { clearConsole } = require('./util/clearConsole');
const { getPromptModules } = require('./util/createTools');

process.env.VUE_CLI_DEBUG = true;

const handleInvalidProjectName = name => {
  const result = validateProjectName(name);

  if (!result.validForNewPackages) {
    console.error(chalk.red(`Invalid project name: "${name}"`));
    if (result.errors)
      result.errors.forEach(err => {
        console.error(chalk.red.dim(`Error: ${err}`));
      });
    if (result.warnings)
      result.warnings.forEach(warn => {
        console.error(chalk.red.dim(`Warning: ${warn}`));
      });
    exit(1);
  }
};

const initTargetDir = async ({ targetDir, options, inCurrent }) => {
  if (fs.existsSync(targetDir)) {
    if (options.force) {
      await fs.remove(targetDir);
    } else {
      await clearConsole();
      if (inCurrent) {
        const { ok } = await inquirer.prompt([
          {
            name: 'ok',
            type: 'confirm',
            message: `Generate project in current directory?`,
          },
        ]);
        if (!ok) {
          return;
        }
      } else {
        const { action } = await inquirer.prompt([
          {
            name: 'action',
            type: 'list',
            message: `Target directory ${chalk.cyan(
              targetDir
            )} already exists. Pick an action:`,
            choices: [
              { name: 'Overwrite', value: 'overwrite' },
              { name: 'Merge', value: 'merge' },
              { name: 'Cancel', value: false },
            ],
          },
        ]);
        if (!action) {
          return;
        }
        if (action === 'overwrite') {
          console.info(`\nRemoving ${chalk.cyan(targetDir)}...`);
          await fs.remove(targetDir);
        }
      }
    }
  }

  return true;
};

const create = async (projectName, options) => {
  if (options.proxy) {
    process.env.HTTP_PROXY = options.proxy;
  }

  const cwd = options.cwd || process.cwd();
  const inCurrent = projectName === '.';
  const name = inCurrent ? path.relative('../', cwd) : projectName;
  const targetDir = path.resolve(cwd, projectName || '.');

  handleInvalidProjectName(name);

  if (!initTargetDir({ targetDir, options, inCurrent })) return;

  const creator = new Creator(name, targetDir, getPromptModules());
  await creator.create(options);
};

module.exports = (...args) => {
  return create(...args).catch(err => {
    stopSpinner(false); // do not persist
    error(err);
    if (!process.env.VUE_CLI_TEST) {
      process.exit(1);
    }
  });
};
