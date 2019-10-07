/**
 * Manually select the features
 * Check the features needed for your project
 */
exports.getPromptModules = () => {
  return [
    'babel',
    'typescript',
    'pwa',
    'router',
    'vuex',
    'cssPreprocessors',
    'linter',
    'unit',
    'e2e',
  ].map(file => require(`../promptModules/${file}`));
};
