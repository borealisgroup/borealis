import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import includePaths from 'rollup-plugin-includepaths';

const babelConfig = require('./babel.config');

const includePathOptions = {
  include: {},
  paths: ['src'],
  external: [],
  extensions: ['.jsx', '.js'],
};

export default [
  {
    input: 'src/index.js',
    output: [
      {
        format: 'cjs',
        file: 'lib/index.js',
        // sourcemap: true,
      },
      // ES module version, for modern browsers
      {
        format: 'es',
        file: 'lib/index.es.js',
        // sourcemap: true,
      },
    ],
    external: ['react', 'react-dom', 'prop-types', 'styled-components'],
    plugins: [
      // tells Rollup how to find modules in node_modules
      resolve(),
      // converts to ES modules
      commonjs({
        include: 'node_modules/**',
      }),
      babel(babelConfig),
      includePaths(includePathOptions),
    ],
  },
];
