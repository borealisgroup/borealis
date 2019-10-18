const merge = require('deepmerge');
const path = require('path');

module.exports = {
  pluginOptions: {
    apollo: {
      enableMocks: false,
      enableEngine: false,
    },
  },

  configureWebpack: {
    resolve: {
      symlinks: false,
    },
    devServer: {
      watchOptions: {
        poll: true,
      },
      clientLogLevel: 'info',
      // public: '192.168.56.132' // vagrant machine address
    },
  },

  chainWebpack: config => {
    config.module
      .rule('stylus')
      .oneOf('vue')
      .use('postcss-loader')
      .tap(options =>
        merge(options, {
          config: {
            path: path.resolve(__dirname, '.postcssrc'),
          },
        })
      );
  },

  css: {
    loaderOptions: {
      stylus: {
        import: ['~@/style/imports'],
      },
    },
  },
};
