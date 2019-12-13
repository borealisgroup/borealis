const { createSchema } = require('@vue/cli-shared-utils/lib/validate');

exports.defaultPreset = {
  useConfigFiles: false,
  cssPreprocessor: undefined,
  plugins: {
    '@borealisgroup/cli-plugin-babel': {},
    '@vue/cli-plugin-eslint': {
      config: 'base',
      lintOn: ['save'],
    },
  },
};

exports.presetSchema = createSchema(joi =>
  joi.object().keys({
    bare: joi.boolean(),
    useConfigFiles: joi.boolean(),
    // TODO: Use warn for router and vuex once @hapi/joi v16 releases
    router: joi.boolean(),
    routerHistoryMode: joi.boolean(),
    vuex: joi.boolean(),
    cssPreprocessor: joi
      .string()
      .only(['sass', 'dart-sass', 'node-sass', 'less', 'stylus']),
    plugins: joi.object().required(),
    configs: joi.object(),
  })
);
