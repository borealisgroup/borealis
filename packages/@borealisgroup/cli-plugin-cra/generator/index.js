module.exports = api => {
  api.injectImports(api.entryFile, `import pokpok from './router'`);
  // api.injectImports(api.entryFile, `import router from './router'`);
  // api.injectRootOptions(api.entryFile, `router`);

  // api.extendPackage({
  //   dependencies: {
  //     'vue-router': '^3.0.6',
  //   },
  // });

  api.render('./template');

  // if (api.invoking) {
  //   if (api.hasPlugin('typescript')) {
  //     /* eslint-disable-next-line node/no-extraneous-require */
  //     const convertFiles = require('@vue/cli-plugin-typescript/generator/convert');
  //     convertFiles(api);
  //   }
  // }
};
