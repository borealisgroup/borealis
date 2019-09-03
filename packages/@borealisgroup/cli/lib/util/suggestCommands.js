const chalk = require('chalk');
const didYouMean = require('didyoumean');

// Setting edit distance to 60% of the input string's length
didYouMean.threshold = 0.6;

module.exports = function suggestCommands(program, unknownCommand) {
  const availableCommands = program.commands.map(cmd => {
    return cmd._name;
  });

  const suggestion = didYouMean(unknownCommand, availableCommands);
  if (suggestion) {
    console.info(`  ${chalk.red(`Did you mean ${chalk.yellow(suggestion)}?`)}`);
  }
};
