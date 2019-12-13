module.exports = cli => {
  cli.injectFeature({
    name: 'Create React App',
    value: 'cra',
    description: 'Create React apps with no build configuration',
    link: 'https://create-react-app.dev/',
  });

  cli.onPromptComplete((answers, options) => {
    if (answers.features.includes('cra')) {
      options.plugins['@borealisgroup/cli-plugin-cra'] = {};
    }
  });
};
