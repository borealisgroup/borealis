const chalk = require('chalk');
const padEnd = require('string.prototype.padend');
const getPadLength = require('@vue/cli-service/lib/util/getPadLength');

module.exports = api => {
  function logMainHelp() {
    console.info(
      `\n  Usage: bor-cli-service <command> [options]\n\n  Commands:\n`
    );
    const { commands } = api.service;
    const padLength = getPadLength(commands);
    for (const name of Object.keys(commands)) {
      if (name !== 'help') {
        const opts = commands[name].opts || {};
        console.info(
          `    ${chalk.blue(padEnd(name, padLength))}${opts.description || ''}`
        );
      }
    }
    console.info(
      `\n  run ${chalk.green(
        `bor-cli-service help [command]`
      )} for usage of a specific command.\n`
    );
  }

  function logHelpForCommand(name, command) {
    if (!command) {
      console.info(chalk.red(`\n  command "${name}" does not exist.`));
    } else {
      const opts = command.opts || {};
      if (opts.usage) {
        console.info(`\n  Usage: ${opts.usage}`);
      }
      if (opts.options) {
        console.info(`\n  Options:\n`);
        const padLength = getPadLength(opts.options);
        for (const [flags, description] of Object.entries(opts.options)) {
          console.info(
            `    ${chalk.blue(padEnd(flags, padLength))}${description}`
          );
        }
      }
      if (opts.details) {
        console.info();
        console.info(
          opts.details
            .split('\n')
            .map(line => `  ${line}`)
            .join('\n')
        );
      }
      console.info();
    }
  }

  api.registerCommand('help', args => {
    const commandName = args._[0];
    if (!commandName) {
      logMainHelp();
    } else {
      logHelpForCommand(commandName, api.service.commands[commandName]);
    }
  });
};
