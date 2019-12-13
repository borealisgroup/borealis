module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    'plugin:prettier/recommended',
    'prettier/vue',
  ],
  rules: {
    'prettier/prettier': [
      1,
      {
        trailingComma: 'es5',
        singleQuote: true,
      },
    ],
    'vue/html-self-closing': 'off',
    'vue/no-use-v-if-with-v-for': 'off',
    'vue/no-unused-vars': 'warn',
    'vue/return-in-computed-property': 'warn',
    'no-unused-vars': 'warn',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  globals: {
    ClientAddonApi: false,
    mapSharedData: false,
    Vue: false,
    name: 'off',
  },
};
