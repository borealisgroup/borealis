const { getModules } = require('@borealisgroup/dynamic-export');

Object.assign(module.exports, getModules(require.context('.', true, /\.jsx$/)));
