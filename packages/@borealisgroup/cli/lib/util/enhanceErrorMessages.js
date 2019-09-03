const program = require('commander');
const chalk = require('chalk');

module.exports = (methodName, log) => {
  program.Command.prototype[methodName] = function enhanceErrorMessages(
    ...args
  ) {
    if (methodName === 'unknownOption' && this._allowUnknownOption) {
      return;
    }
    this.outputHelp();
    console.info(`  ${chalk.red(log(...args))}`);
    console.info();
    process.exit(1);
  };
};
