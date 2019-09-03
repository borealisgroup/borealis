const semver = require('semver');
const { loadOptions, saveOptions } = require('../options');
const PackageManager = require('./ProjectPackageManager');

let sessionCached;
const pm = new PackageManager();

// fetch the latest version and save it on disk
// so that it is available immediately next time
async function getAndCacheLatestVersion(cached, includePrerelease) {
  let version = await pm.getRemoteVersion('@borealisgroup/cli', 'latest');

  if (includePrerelease) {
    const next = await pm.getRemoteVersion('@borealisgroup/cli', 'next');
    version = semver.gt(next, version) ? next : version;
  }

  if (
    // semver.valid(version) &&
    version !== cached
  ) {
    saveOptions({ latestVersion: version, lastChecked: Date.now() });
    return version;
  }
  return cached;
}

module.exports = async function getVersions() {
  if (sessionCached) {
    return sessionCached;
  }

  let latest;
  const local = require(`../../package.json`).version;
  if (process.env.VUE_CLI_TEST || process.env.VUE_CLI_DEBUG) {
    return (sessionCached = {
      current: local,
      latest: local,
    });
  }

  // should also check for prerelease versions if the current one is a prerelease
  const includePrerelease = !!semver.prerelease(local);

  const { latestVersion = local, lastChecked = 0 } = loadOptions();
  const cached = latestVersion;
  const daysPassed = (Date.now() - lastChecked) / (60 * 60 * 1000 * 24);

  if (daysPassed > 1) {
    // if we haven't check for a new version in a day, wait for the check
    // before proceeding
    latest = await getAndCacheLatestVersion(cached, includePrerelease);
  } else {
    // Otherwise, do a check in the background. If the result was updated,
    // it will be used for the next 24 hours.
    getAndCacheLatestVersion(cached, includePrerelease);
    latest = cached;
  }

  return (sessionCached = {
    current: local,
    latest,
  });
};
