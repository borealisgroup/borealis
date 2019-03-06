/**
 * Container Generator
 */

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
        type: 'add',
        path: '../../packages/{{name}}/README.md',
        templateFile: './package/README.md.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../packages/{{name}}/package.json',
        templateFile: './package/package.json.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../packages/{{name}}/index.js',
        abortOnFail: true,
      },
    ];

    return actions;
  },
};
