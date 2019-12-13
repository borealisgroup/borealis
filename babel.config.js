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
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    'add-react-displayname',
    'babel-plugin-dynamic-import-node',
    'babel-plugin-styled-components',
    ['inline-json-import', {}],
  ],
  env: {
    test: {
      presets: [
        ['@babel/preset-react', { modules: 'commonjs' }],
        ['@babel/preset-env', { modules: 'commonjs' }],
      ],
    },
  },
  extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.ts', '.tsx'],
  exclude: 'node_modules/**',
  ignore: ['**/*.stories.js', '**/generate.js'],
  runtimeHelpers: true,
};
