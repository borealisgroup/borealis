"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getModules = void 0;

/**
 * Get the context of all files with the same extension
 * For each file:
 * 	- input = path name
 * 	- name = remove the path (everything till last '/')
 * 	- name = remove the extension part (everything after the first '.')
 * 	- export the file with this name
 */
var getModules = function getModules(req) {
  var modules = {};
  req.keys().forEach(function (key) {
    var name = key.replace(/.*\//, '');
    name = name.replace(/\.(.*)$/, '');
    modules[name] = req(key).default;
  });
  return modules;
};

exports.getModules = getModules;