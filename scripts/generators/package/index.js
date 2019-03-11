/**
 * Container Generator
 */

const add = {
  type: 'add',
  abortOnFail: true,
};

module.exports = {
  description: 'Generate a package',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'package name:',
      validate: value => {
        if (/.+/.test(value.trim())) return true;
        return 'required';
      },
    },
    {
      type: 'confirm',
      name: 'dev',
      message: '--save-dev?',
    },
  ],
  actions: data => {
    // Generate
    const actions = [
      {
        ...add,
        path: '../../packages/{{name}}/README.md',
        templateFile: './package/README.md.hbs',
      },
      {
        ...add,
        path: '../../packages/{{name}}/package.json',
        templateFile: './package/package.json.hbs',
      },
      {
        ...add,
        path: '../../packages/{{name}}/src/index.js',
      },
      {
        ...add,
        path: '../../packages/{{name}}/test/index.js',
      },
      {
        ...add,
        path: '../../packages/{{name}}/package.json',
        templateFile: './package/package.json.hbs',
      },
    ];

    return actions;
  },
};
