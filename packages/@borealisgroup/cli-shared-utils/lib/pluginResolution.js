// TODO: generalize
const pluginRE = /^(@(vue|borealisgroup)\/|(vue|bor)-|@[\w-]+(\.)?[\w-]+\/(vue|bor)-)cli-plugin-/;
const scopeRE = /^@[\w-]+(\.)?[\w-]+\//;
const officialRE = /^@borealisgroup\//;

// TODO: generalize
const officialPlugins = [];

exports.isPlugin = id => pluginRE.test(id);

exports.isOfficialPlugin = id => exports.isPlugin(id) && officialRE.test(id);

exports.toShortPluginId = id => id.replace(pluginRE, '');

exports.resolvePluginId = id => {
  // already full id
  // e.g. vue-cli-plugin-foo, @vue/cli-plugin-foo, @bar/vue-cli-plugin-foo
  if (pluginRE.test(id)) {
    return id;
  }

  if (id === '@borealisgroup/cli-service') {
    return id;
  }

  if (officialPlugins.includes(id)) {
    return `@borealisgroup/cli-plugin-${id}`;
  }
  // scoped short
  // e.g. @vue/foo, @bar/foo
  if (id.charAt(0) === '@') {
    const scopeMatch = id.match(scopeRE);
    if (scopeMatch) {
      const scope = scopeMatch[0];
      const shortId = id.replace(scopeRE, '');
      return `${scope}${
        scope === '@borealisgroup/' ? `` : `bor-`
      }cli-plugin-${shortId}`;
    }
  }
  // default short
  // e.g. foo
  return `borealisgroup-cli-plugin-${id}`;
};

exports.matchesPluginId = (input, full) => {
  const short = full.replace(pluginRE, '');
  return (
    // input is full
    full === input ||
    // input is short without scope
    short === input ||
    // input is short with scope
    short === input.replace(scopeRE, '')
  );
};

exports.getPluginLink = id => {
  if (officialRE.test(id)) {
    return `https://github.com/borealisgroup/borealis/tree/dev/packages/%40borealisgroup/cli-plugin-${exports.toShortPluginId(
      id
    )}`;
  }
  let pkg = {};
  try {
    pkg = require(`${id}/package.json`);
  } catch (e) {
    console.error(e);
  }
  return (
    pkg.homepage ||
    (pkg.repository && pkg.repository.url) ||
    `https://www.npmjs.com/package/${id.replace(`/`, `%2F`)}`
  );
};
