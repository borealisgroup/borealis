const path = require('path');
const fs = require('fs-extra');
const execa = require('execa');

module.exports = function createTestProject(name, preset, cwd, initGit = true) {
  delete process.env.VUE_CLI_SKIP_WRITE;

  cwd = cwd || path.resolve(__dirname, '../../test');

  const projectRoot = path.resolve(cwd, name);

  const read = file => {
    return fs.readFile(path.resolve(projectRoot, file), 'utf-8');
  };

  const has = file => {
    return fs.existsSync(path.resolve(projectRoot, file));
  };

  if (has(projectRoot)) {
    console.warn(
      `An existing test project already exists for ${name}. May get unexpected test results due to project re-use`
    );
  }

  const write = (file, content) => {
    const targetPath = path.resolve(projectRoot, file);
    const dir = path.dirname(targetPath);
    return fs.ensureDir(dir).then(() => fs.writeFile(targetPath, content));
  };

  const rm = file => {
    return fs.remove(path.resolve(projectRoot, file));
  };

  const run = (command, args) => {
    [command, ...args] = command.split(/\s+/);
    if (command === 'bor-cli-service') {
      // appveyor has problem with paths sometimes
      command = require.resolve(
        '@borealisgroup/cli-service/bin/bor-cli-service'
      );
    }
    return execa(command, args, { cwd: projectRoot });
  };

  const cliBinPath = require.resolve('@borealisgroup/cli/bin/vue');

  const args = [
    'create',
    name,
    '--force',
    '--inlinePreset',
    JSON.stringify(preset),
    initGit ? '--git' : '--no-git',
  ];

  const options = {
    cwd,
    stdio: 'inherit',
  };

  return execa(cliBinPath, args, options).then(() => ({
    dir: projectRoot,
    has,
    read,
    write,
    run,
    rm,
  }));
};
