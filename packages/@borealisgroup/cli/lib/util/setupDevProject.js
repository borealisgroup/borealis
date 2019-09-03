// dev only

const path = require('path');
const { linkBin } = require('./linkBin');

module.exports = function setupDevProject(targetDir) {
  return linkBin(
    require.resolve('@borealisgroup/cli-service/bin/bor-cli-service'),
    path.join(targetDir, 'node_modules', '.bin', 'bor-cli-service')
  );
};
