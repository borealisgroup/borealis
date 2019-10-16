module.exports = [
  [
    'use-babel-config',
    {
      presets: ['react-app'],
      plugins: [
        [
          'babel-plugin-named-asset-import',
          {
            loaderMap: {
              svg: {
                ReactComponent: '@svgr/webpack?-svgo,+ref![path]',
              },
            },
          },
        ],
        // customize babel plugins
      ],
    },
  ],
  config => {
    const newConfig = config;

    // customize webpack config

    return newConfig;
  },
];
