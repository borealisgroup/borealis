#!/usr/bin/env node

const chalk = require('chalk');
const minimist = require('minimist');
const envinfo = require('envinfo');
const program = require('commander');
const { version } = require('../package');
const requiredVersion = require('../package.json').engines.node;
const checkNodeVersion = require('../lib/util/checkNodeVersion');
const cleanArgs = require('../lib/util/cleanArgs');
const suggestCommands = require('../lib/util/suggestCommands');

checkNodeVersion(requiredVersion, 'bor-cli');

program.version(version).usage('<command> [options]');

//
// ─── CREATE ─────────────────────────────────────────────────────────────────────
//
program
  .command('create <app-name>')
  .description('create a new project powered by bor-cli-service')
  // .option(
  //   '-p, --preset <presetName>',
  //   'Skip prompts and use saved or remote preset'
  // )
  // .option('-d, --default', 'Skip prompts and use default preset')
  // .option(
  //   '-i, --inlinePreset <json>',
  //   'Skip prompts and use inline JSON string as preset'
  // )
  // .option(
  //   '-m, --packageManager <command>',
  //   'Use specified npm client when installing dependencies'
  // )
  // .option(
  //   '-r, --registry <url>',
  //   'Use specified npm registry when installing dependencies (only for npm)'
  // )
  // .option(
  //   '-g, --git [message]',
  //   'Force git initialization with initial commit message'
  // )
  // .option('-n, --no-git', 'Skip git initialization')
  // .option('-f, --force', 'Overwrite target directory if it exists')
  // .option('-c, --clone', 'Use git clone when fetching remote preset')
  // .option('-x, --proxy', 'Use specified proxy when creating project')
  // .option('-b, --bare', 'Scaffold project without beginner instructions')
  // .option('--skipGetStarted', 'Skip displaying "Get started" instructions')
  .action((name, cmd) => {
    const options = cleanArgs(cmd);

    if (minimist(process.argv.slice(3))._.length > 1) {
      console.info(
        chalk.yellow(
          "\n Info: You provided more than one argument. The first one will be used as the app's name, the rest are ignored."
        )
      );
    }
    // --git makes commander to default git to true
    if (process.argv.includes('-g') || process.argv.includes('--git')) {
      options.forceGit = true;
    }

    require('../lib/create')(name, options);
  });

//
// ─── INFO ───────────────────────────────────────────────────────────────────────
//
program
  .command('info')
  .description('print debugging information about your environment')
  .action(() => {
    console.info(chalk.bold('\nEnvironment Info:'));
    envinfo
      .run(
        {
          System: ['OS', 'CPU'],
          Binaries: ['Node', 'Yarn', 'npm'],
          Browsers: ['Chrome', 'Edge', 'Firefox', 'Safari'],
          npmPackages: '/**/{@borealisgroup/*/}',
          npmGlobalPackages: ['nodemon'],
        },
        {
          showNotFound: true,
          duplicates: true,
          fullTree: true,
        }
      )
      .then(console.info);
  });

//
// ─── OUTPUT HELP INFORMATION ON UNKNOWN COMMANDS ────────────────────────────────
//
program.arguments('<command>').action(cmd => {
  program.outputHelp();
  console.info(`  ${chalk.red(`Unknown command ${chalk.yellow(cmd)}.`)}`);
  console.info();
  suggestCommands(program, cmd);
});

//
// ─── HELP ───────────────────────────────────────────────────────────────────────
//
program.on('--help', () => {
  console.info();
  console.info(
    `  Run ${chalk.cyan(
      `bor <command> --help`
    )} for detailed usage of given command.`
  );
  console.info();
});

program.commands.forEach(c => c.on('--help', () => console.info()));

//
// ─── ERROR MESSAGES ──────────────────────────────────────────────
//
const enhanceErrorMessages = require('../lib/util/enhanceErrorMessages');

enhanceErrorMessages('missingArgument', argName => {
  return `Missing required argument ${chalk.yellow(`<${argName}>`)}.`;
});

enhanceErrorMessages('unknownOption', optionName => {
  return `Unknown option ${chalk.yellow(optionName)}.`;
});

enhanceErrorMessages('optionMissingArgument', (option, flag) => {
  return `Missing required argument for option ${chalk.yellow(option.flags)}${
    flag ? `, got ${chalk.yellow(flag)}` : ``
  }`;
});

//
// ─── PROGRAM END ────────────────────────────────────────────────────────────────
//
program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
