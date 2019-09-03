const fs = require('fs');
const cloneDeep = require('lodash.clonedeep');
const { exit } = require('@vue/cli-shared-utils/lib/exit');
const { error } = require('@vue/cli-shared-utils/lib/logger');
const {
  createSchema,
  validate,
} = require('@vue/cli-shared-utils/lib/validate');
const { getRcPath } = require('./util/rcPath');
const { defaultPreset, presetSchema } = require('./config/defaultPresets');

const rcPath = (exports.rcPath = getRcPath('.borrc'));

const schema = createSchema(joi =>
  joi.object().keys({
    latestVersion: joi
      .string()
      .regex(/^\d+\.\d+\.\d+(-(alpha|beta|rc)\.\d+)?$/),
    lastChecked: joi.date().timestamp(),
    packageManager: joi.string().only(['yarn', 'npm']),
    presets: joi.object().pattern(/^/, presetSchema),
  })
);

exports.validatePreset = preset =>
  validate(preset, presetSchema, msg => {
    error(`invalid preset options: ${msg}`);
  });

exports.defaults = {
  lastChecked: undefined,
  latestVersion: undefined,
  packageManager: undefined,
  presets: {
    default: defaultPreset,
  },
};

let cachedOptions;

exports.loadOptions = () => {
  if (cachedOptions) {
    return cachedOptions;
  }
  if (fs.existsSync(rcPath)) {
    try {
      cachedOptions = JSON.parse(fs.readFileSync(rcPath, 'utf-8'));
    } catch (e) {
      error(
        `Error loading saved preferences: ` +
          `~/.borrc may be corrupted or have syntax errors. ` +
          `Please fix/delete it and re-run bor-cli in manual mode.\n` +
          `(${e.message})`
      );
      exit(1);
    }
    validate(cachedOptions, schema, () => {
      error(
        `~/.borrc may be outdated. ` +
          `Please delete it and re-run bor-cli in manual mode.`
      );
    });
    return cachedOptions;
  }
  return {};
};

exports.saveOptions = toSave => {
  const options = Object.assign(cloneDeep(exports.loadOptions()), toSave);
  for (const key of Object.keys(options)) {
    if (!(key in exports.defaults)) {
      delete options[key];
    }
  }
  cachedOptions = options;
  try {
    fs.writeFileSync(rcPath, JSON.stringify(options, null, 2));
  } catch (e) {
    error(
      `Error saving preferences: ` +
        `make sure you have write access to ${rcPath}.\n` +
        `(${e.message})`
    );
  }
};

exports.savePreset = (name, preset) => {
  const presets = cloneDeep(exports.loadOptions().presets || {});
  presets[name] = preset;
  exports.saveOptions({ presets });
};
