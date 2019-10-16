const chalk = require('chalk');
const semver = require('semver');
const { log, error } = require('@vue/cli-shared-utils');
const {
  resolvePluginId,
  isOfficialPlugin,
} = require('@borealisgroup/cli-shared-utils');
const invoke = require('./invoke');

const PackageManager = require('./util/ProjectPackageManager');
const confirmIfGitDirty = require('./util/confirmIfGitDirty');

const add = async (pluginName, options = {}, context = process.cwd()) => {
  if (!(await confirmIfGitDirty(context))) {
    return;
  }

  const packageName = resolvePluginId(pluginName);

  log();
  log(`📦  Installing ${chalk.cyan(packageName)}...`);
  log();

  const pm = new PackageManager({ context });

  const cliVersion = require('../package.json').version;
  if (isOfficialPlugin(packageName) && semver.prerelease(cliVersion)) {
    await pm.add(`${packageName}@^${cliVersion}`);
  } else {
    await pm.add(packageName);
  }

  log(
    `${chalk.green('✔')}  Successfully installed plugin: ${chalk.cyan(
      packageName
    )}`
  );
  log();

  invoke(pluginName, options, context);
};

module.exports = (...args) => {
  return add(...args).catch(err => {
    error(err);
    if (!process.env.VUE_CLI_TEST) {
      process.exit(1);
    }
  });
};
