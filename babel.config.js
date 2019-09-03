module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        targets: {
          node: 'current',
        },
      },
    ],
    ['@babel/preset-react'],
  ],
  plugins: [
    ['@babel/plugin-proposal-object-rest-spread'],
    ['inline-json-import', {}],
    ['babel-plugin-dynamic-import-node'],
  ],
  exclude: 'node_modules/**',
  ignore: ['**/*.stories.js', '**/generate.js'],
};
