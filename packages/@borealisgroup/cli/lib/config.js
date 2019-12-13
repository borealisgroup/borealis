const path = require('path');
const homedir = require('os').homedir();
const fs = require('fs-extra');
const { get, set, unset, error, launch } = require('@vue/cli-shared-utils');

const configure = async (value, options) => {
  const file = path.resolve(homedir, '.borrc');
  const config = await fs.readJson(file);

  if (!options.delete && !options.get && !options.edit && !options.set) {
    if (options.json) {
      console.info(
        JSON.stringify({
          resolvedPath: file,
          content: config,
        })
      );
    } else {
      console.info(`Resolved path: ${file}\n`, JSON.stringify(config, null, 2));
    }
  }

  if (options.get) {
    // eslint-disable-next-line no-shadow
    const value = get(config, options.get);
    if (options.json) {
      console.info(
        JSON.stringify({
          value,
        })
      );
    } else {
      console.info(value);
    }
  }

  if (options.delete) {
    unset(config, options.delete);
    await fs.writeFile(file, JSON.stringify(config, null, 2), 'utf-8');
    if (options.json) {
      console.info(
        JSON.stringify({
          deleted: options.delete,
        })
      );
    } else {
      console.info(`You have removed the option: ${options.delete}`);
    }
  }

  if (options.edit) {
    launch(file);
  }

  if (options.set && !value) {
    throw new Error(
      `Make sure you define a value for the option ${options.set}`
    );
  }

  if (options.set && value) {
    set(config, options.set, value);

    if (value.match('[0-9]')) {
      set(config, options.set, parseInt(value, 10));
    }

    if (value === 'true') {
      set(config, options.set, true);
    }

    if (value === 'false') {
      set(config, options.set, false);
    }

    await fs.writeFile(file, JSON.stringify(config, null, 2), 'utf-8');
    if (options.json) {
      console.info(
        JSON.stringify({
          updated: options.set,
        })
      );
    } else {
      console.info(`You have updated the option: ${options.set} to ${value}`);
    }
  }
};

module.exports = (...args) => {
  return configure(...args).catch(err => {
    error(err);
    if (!process.env.VUE_CLI_TEST) {
      process.exit(1);
    }
  });
};
