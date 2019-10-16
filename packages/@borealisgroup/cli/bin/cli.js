#!/usr/bin/env node

// TODO: conditions on string
require('dotenv').config();
const chalk = require('chalk');
const minimist = require('minimist');
const envinfo = require('envinfo');
const program = require('commander');
const { version } = require('../package');
const requiredVersion = require('../package.json').engines.node;
const checkNodeVersion = require('../lib/util/checkNodeVersion');
const cleanArgs = require('../lib/util/cleanArgs');
const suggestCommands = require('../lib/util/suggestCommands');

checkNodeVersion(requiredVersion, '@borealisgroup/cli');

program.version(`@borealisgroup/cli ${version}`).usage('<command> [options]');

//
// ─── CREATE ─────────────────────────────────────────────────────────────────────
//
program
  .command('create <app-name>')
  .description('create a new project powered by bor-cli-service')
  .option(
    '-p, --preset <presetName>',
    'Skip prompts and use saved or remote preset'
  )
  .option('-d, --default', 'Skip prompts and use default preset')
  .option(
    '-i, --inlinePreset <json>',
    'Skip prompts and use inline JSON string as preset'
  )
  .option(
    '-m, --packageManager <command>',
    'Use specified npm client when installing dependencies'
  )
  .option(
    '-r, --registry <url>',
    'Use specified npm registry when installing dependencies (only for npm)'
  )
  .option(
    '-g, --git [message]',
    'Force git initialization with initial commit message'
  )
  .option('-n, --no-git', 'Skip git initialization')
  .option('-f, --force', 'Overwrite target directory if it exists')
  .option('-c, --clone', 'Use git clone when fetching remote preset')
  .option('-x, --proxy', 'Use specified proxy when creating project')
  .option('-b, --bare', 'Scaffold project without beginner instructions')
  .option('--skipGetStarted', 'Skip displaying "Get started" instructions')
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
// ─── ADD ────────────────────────────────────────────────────────────────────────
//
program
  .command('add <plugin> [pluginOptions]')
  .description(
    'install a plugin and invoke its generator in an already created project'
  )
  .option(
    '--registry <url>',
    'Use specified npm registry when installing dependencies (only for npm)'
  )
  .allowUnknownOption()
  .action(plugin => {
    require('../lib/add')(plugin, minimist(process.argv.slice(3)));
  });

//
// ─── INVOKE ─────────────────────────────────────────────────────────────────────
//
program
  .command('invoke <plugin> [pluginOptions]')
  .description('invoke the generator of a plugin in an already created project')
  .option(
    '--registry <url>',
    'Use specified npm registry when installing dependencies (only for npm)'
  )
  .allowUnknownOption()
  .action(plugin => {
    require('../lib/invoke')(plugin, minimist(process.argv.slice(3)));
  });

program
  .command('ui')
  .description('start and open the vue-cli ui')
  .option(
    '-H, --host <host>',
    'Host used for the UI server (default: localhost)'
  )
  .option(
    '-p, --port <port>',
    'Port used for the UI server (by default search for available port)'
  )
  .option('-D, --dev', 'Run in dev mode')
  .option('--quiet', `Don't output starting messages`)
  .option('--headless', `Don't open browser on start and output port`)
  .action(cmd => {
    checkNodeVersion('>=8.6', 'vue ui');
    require('../lib/ui')(cleanArgs(cmd));
  });

//
// ─── CONFIG ─────────────────────────────────────────────────────────────────────
//
program
  .command('config [value]')
  .description('inspect and modify the config')
  .option('-g, --get <path>', 'get value from option')
  .option('-s, --set <path> <value>', 'set option value')
  .option('-d, --delete <path>', 'delete option from config')
  .option('-e, --edit', 'open config with default editor')
  .option('--json', 'outputs JSON result only')
  .action((value, cmd) => {
    require('../lib/config')(value, cleanArgs(cmd));
  });

//
// ─── OUTDATED ───────────────────────────────────────────────────────────────────
//

//
// ─── UPGRADE ────────────────────────────────────────────────────────────────────
//

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
