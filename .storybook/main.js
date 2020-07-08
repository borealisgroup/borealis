const path = require('path');

module.exports = {
  stories: [
    '../packages/**/*.stories.(tsx|mdx)',
  ],
  addons: [
    '@storybook/addon-knobs',
    '@storybook/addon-docs/preset',
    '@storybook/addon-storysource'
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: (modulePath) => {
        return !modulePath.includes('test')
          && !modulePath.includes('spec')
          && (modulePath.endsWith('ts') || modulePath.endsWith('tsx'))
      } ,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            rootMode: 'upward',
          },
        },
        {
          loader: require.resolve('ts-loader'),
          options: {
            configFile: path.resolve(__dirname, 'tsconfig.json'),
            transpileOnly: true,
          },
        },
        {
          loader: require.resolve('react-docgen-typescript-loader'),
        },
      ],
    });

    config.resolve.extensions.push('.ts', '.tsx');

    return config;
  }
}