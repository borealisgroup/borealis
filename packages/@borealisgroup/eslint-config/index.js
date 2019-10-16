module.exports = {
  extends: [
    'airbnb',
    'plugin:jest/recommended',
    'plugin:promise/recommended',
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/vue',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
    parser: 'babel-eslint',
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
    webextensions: false,
  },
  plugins: ['react', 'react-hooks', 'promise', 'jest', 'graphql', 'prettier'],
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src'],
      },
    },
    react: { version: 'detect' },
  },
  rules: {
    'prettier/prettier': [
      1,
      {
        trailingComma: 'es5',
        singleQuote: true,
      },
    ],

    'linebreak-style': 'off',
    'global-require': 'off',
    'no-multi-assign': 'off',
    'no-await-in-loop': 'off',
    'no-empty': 'off',
    'no-console': [
      'error',
      {
        allow: ['info', 'warn', 'error'],
      },
    ],
    'no-nested-ternary': 'off', // short
    'no-new': 'off', // exceptions
    'no-param-reassign': 'off',
    'no-plusplus': 'off', // short
    'no-prototype-builtins': 'off', // short
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ], // for..of OK (break)
    'no-return-assign': 'off', // short
    'no-underscore-dangle': 'off',
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
    ],
    'prefer-promise-reject-errors': 'off',
    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true },
    ],
    'class-methods-use-this': 'off',
    'consistent-return': 'off',

    'import/no-dynamic-require': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
      },
    ],

    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/no-autofocus': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',

    'promise/catch-or-return': 'off',
    'promise/always-return': 'off',

    'react/button-has-type': [
      'error',
      {
        reset: true,
      },
    ],
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
