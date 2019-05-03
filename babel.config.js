module.exports = {
  presets: [['@babel/preset-env', { modules: false }], ['@babel/preset-react']],
  plugins: [
    ['@babel/plugin-proposal-object-rest-spread'],
    ['inline-json-import', {}],
  ],
  exclude: 'node_modules/**',
  ignore: ['**/*.stories.js', '**/generate.js'],
};
