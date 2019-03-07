const merge = require('lodash/merge');
const configDevelopment = require('./config.development');
const configProduction = require('./config.production');
const slice = require('./slice.config');
// Other slices of config...

const config = {
  env: process.env.NODE_ENV || 'development',

  development: configDevelopment,
  production: configProduction,

  ...slice,
};

const configMerged = merge(config, config[config.env]);

Object.assign(module.exports, configMerged);
