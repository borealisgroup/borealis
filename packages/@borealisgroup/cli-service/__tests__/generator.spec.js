const generateWithPlugin = require('@borealisgroup/cli-test-utils/generateWithPlugin');

test('sass (default)', async () => {
  const { pkg, files } = await generateWithPlugin([
    {
      id: '@borealisgroup/cli-service',
      apply: require('../generator'),
      options: {
        cssPreprocessor: 'sass',
      },
    },
  ]);

  expect(files['src/App.vue']).toMatch('<style lang="scss">');
  expect(pkg).toHaveProperty(['devDependencies', 'sass']);
});

test('node sass', async () => {
  const { pkg, files } = await generateWithPlugin([
    {
      id: '@borealisgroup/cli-service',
      apply: require('../generator'),
      options: {
        cssPreprocessor: 'node-sass',
      },
    },
  ]);

  expect(files['src/App.vue']).toMatch('<style lang="scss">');
  expect(pkg).toHaveProperty(['devDependencies', 'node-sass']);
});

test('dart sass', async () => {
  const { pkg, files } = await generateWithPlugin([
    {
      id: '@borealisgroup/cli-service',
      apply: require('../generator'),
      options: {
        cssPreprocessor: 'dart-sass',
      },
    },
  ]);

  expect(files['src/App.vue']).toMatch('<style lang="scss">');
  expect(pkg).toHaveProperty(['devDependencies', 'sass']);
});
