module.exports = cli => {
  cli.injectFeature({
    name: 'Vue Core',
    value: 'vue-core',
    description: 'Vue boilerplate',
    link: 'https://cli.vuejs.org/',
  });

  cli.onPromptComplete((answers, options) => {
    if (answers.features.includes('vue-core')) {
      options.plugins['@borealisgroup/cli-plugin-vue-core'] = {};
    }
  });
};
