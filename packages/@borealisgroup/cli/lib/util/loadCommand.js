module.exports = function loadCommand(commandName, moduleName) {
  const isNotFoundError = err => {
    return err.message.match(/Cannot find module/);
  };
  try {
    return require(moduleName);
  } catch (err) {
    if (isNotFoundError(err)) {
      try {
        return require('import-global')(moduleName);
      } catch (err2) {
        if (isNotFoundError(err2)) {
          const chalk = require('chalk');
          const { hasYarn } = require('@vue/cli-shared-utils');
          let installCommand = `npm install -g`;
          if (hasYarn()) {
            installCommand = `yarn global add`;
          }
          console.info();
          console.info(
            `  Command ${chalk.cyan(
              `bor ${commandName}`
            )} requires a global addon to be installed.\n` +
              `  Please run ${chalk.cyan(
                `${installCommand} ${moduleName}`
              )} and try again.`
          );
          console.info();
          process.exit(1);
        } else {
          throw err2;
        }
      }
    } else {
      throw err;
    }
  }
};
