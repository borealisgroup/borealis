const semver = require('semver');
const chalk = require('chalk');

// Check node version before requiring/doing anything else
// The user may be on a very old node version
module.exports = function checkNodeVersion(wanted, id) {
  if (!semver.satisfies(process.version, wanted)) {
    console.info(
      chalk.red(
        `You are using Node ${process.version}, but this version of ${id} requires Node ${wanted}.\n` +
          `Please upgrade your Node version.`
      )
    );
    process.exit(1);
  }

  if (semver.satisfies(process.version, '9.x')) {
    console.info(
      chalk.red(
        `You are using Node ${process.version}.\n` +
          `Node.js 9.x has already reached end-of-life and will not be supported in future major releases.\n` +
          `It's strongly recommended to use an active LTS version instead.`
      )
    );
  }
};
