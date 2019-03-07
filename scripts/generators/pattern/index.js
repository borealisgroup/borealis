/**
 * Container Generator
 */

module.exports = {
  description: 'Generate a pattern folder',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'pattern name:',
      validate: value => {
        if (/.+/.test(value.trim())) return true;
        return 'required';
      },
    },
  ],
  actions: data => {
    // Generate
    const actions = [
      {
        type: 'add',
        path: '../../patterns/{{name}}/README.md',
        templateFile: './pattern/README.md.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../patterns/{{name}}/example/index.js',
        abortOnFail: true,
      },
    ];

    return actions;
  },
};
