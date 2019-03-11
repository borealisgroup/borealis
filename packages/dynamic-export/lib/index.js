/**
 * Get the context of all files with the same extension
 * For each file:
 * 	- input = path name
 * 	- name = remove the path (everything till last '/')
 * 	- name = remove the extension part (everything after the first '.')
 * 	- export the file with this name
 */
export const getModules = req => {
  const modules = {};
  req.keys().forEach(key => {
    let name = key.replace(/.*\//, '');
    name = name.replace(/\.(.*)$/, '');
    modules[name] = req(key).default;
  });
  return modules;
};