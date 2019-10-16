module.exports = api => {
  // api.injectImports(api.entryFile, `import pokpok from './router'`);
  // api.injectImports(api.entryFile, `import router from './router'`);
  // api.injectRootOptions(api.entryFile, `router`);

  api.extendPackage({
    scripts: {
      'analyze:ci':
        'source-map-explorer --html build/static/js/*.js > source-map-result.html',
      analyze: 'npm run build && source-map-explorer build/static/js/*.js',
      build: 'rescripts build',
      clean: 'rm -rf node_modules',
      eject: 'react-scripts eject',
      format: 'prettier-eslint "src/**/*.{js,jsx}" --write',
      'lint-css': 'stylelint "src/**/*.{js,jsx}"',
      'lint-js': 'eslint --ext .js --ext .jsx src',
      lint: 'npm-run-all lint-js lint-css',
      rebuild: 'npm run clean && npm install && npm run build',
      reinstall: 'npm run clean && npm install',
      start: 'rescripts start',
      'test:CI':
        'cross-env CI=true react-scripts test --env=jsdom --modulePaths=src',
      'test:coverage': 'react-scripts test --coverage --modulePaths=src',
      test: 'react-scripts test --modulePaths=src',
      validate: 'npm-run-all lint test',
    },
    dependencies: {
      '@rescripts/cli': '0.0.12',
      '@rescripts/rescript-env': '0.0.10',
      '@borealisgroup/theme': '^1.7.7',
      'cross-env': '6.0.3',
      react: '^16.10.2',
      'react-app-polyfill': '^1.0.4',
      'react-dom': '^16.10.2',
      'react-redux': '7.1.1',
      'react-router-dom': '5.1.2',
      'react-scripts': '3.2.0',
      redux: '4.0.4',
      'redux-actions': '^2.6.5',
      'redux-devtools-extension': '^2.13.8',
      'redux-thunk': '2.3.0',
      reselect: '^4.0.0',
      'styled-components': '4.4.0',
    },
    devDependencies: {
      '@borealisgroup/eslint-config': '^1.10.0-alpha.1',
      '@borealisgroup/stylelint-config': '^1.7.8',
      husky: '^3.0.9',
      'lint-staged': '^9.4.2',
      'npm-run-all': '^4.1.5',
      'redux-logger': '^3.0.6',
      'source-map-explorer': '^2.1.0',
    },
    husky: {
      hooks: {
        'pre-commit': 'lint-staged',
      },
    },
    'lint-staged': {
      '*.{js,jsx}': ['eslint', 'git add'],
    },
    browserslist: ['>0.2%', 'not dead', 'not ie <= 11', 'not op_mini all'],
  });

  api.render('./template');
};
