/* eslint-disable jest/no-jest-import */
const minimist = require('minimist');

const rawArgs = process.argv.slice(2);
const args = minimist(rawArgs);

let regex;
if (args.p) {
  const packages = (args.p || args.package).split(',').join('|');
  regex = `.*@borealisgroup/(${packages}|cli-plugin-(${packages}))/.*\\.spec\\.js$`;
  const i = rawArgs.indexOf('-p');
  rawArgs.splice(i, 2);
}

const jestArgs = [
  '--env',
  'node',
  '--runInBand',
  ...rawArgs,
  ...(regex ? [regex] : []),
];

console.info(`running jest with args: ${jestArgs.join(' ')}`);

require('jest').run(jestArgs);
