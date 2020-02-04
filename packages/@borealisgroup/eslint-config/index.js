module.exports = {
  extends: [
    'airbnb',
    'plugin:cypress/recommended',
    'plugin:jest/recommended',
    'plugin:promise/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
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
    'cypress/globals': true,
    es6: true,
    jest: true,
    node: true,
    webextensions: false,
  },
  plugins: [
    'chai-friendly',
    'cypress',
    'react',
    'react-hooks',
    'promise',
    'jest',
    'simple-import-sort',
    'prettier',
  ],
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
    'no-continue': 'off',
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

    // https://github.com/benmosher/eslint-plugin-import/issues/1558
    'import/extensions': [
      'error',
      'always',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
        jsx: 'never',
      },
    ],
    'import/no-dynamic-require': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off', // Allow single Named-export
    'import/order': ['off', { 'newlines-between': 'always' }],
    'simple-import-sort/sort': [
      'error',
      {
        groups: [
          [
            // import "./setup": Side effect imports.
            '^\\u0000',
            // Node.js builtins.`
            '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
            // import react from "react": Packages.
            '^react',
            // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
            '^@?\\w',
            // import a from "/a": Absolute imports and other imports.
            // Anything that does not start with a dot.
            '^(assets|components|config|hooks|plugins|store|styled|themes|utils|contexts)(/.*|$)',
            // import a from "./a": Relative imports.
            // Parent imports. Put `..` last.
            '^\\.\\.(?!/?$)',
            '^\\.\\./?$',
            // Other relative imports. Put same-folder imports and `.` last.
            '^\\./(?=.*/)(?!/?$)',
            '^\\.(?!/?$)',
            '^\\./?$',
          ],
        ],
      },
    ],

    'jest/expect-expect': 'off',

    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/no-autofocus': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',

    'promise/catch-or-return': 'off',
    'promise/always-return': 'off',
    'promise/no-callback-in-promise': 'off',

    'react/button-has-type': [
      'error',
      {
        reset: true,
      },
    ],
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ], // also want to use with ".tsx"
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  overrides: [
    {
      files: 'server/**/*.js',
      env: { node: true },
      rules: {
        'simple-import-sort/sort': 'off',
        'import/order': ['error', { 'newlines-between': 'never' }],
      },
    },
    {
      files: ['**/*.test.*', '**/*.spec.*'],
      env: {
        jest: true,
      },
    },
  ],
};
