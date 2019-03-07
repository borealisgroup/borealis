/**
 * Exports the generators so plop knows them
 */

const packageGenerator = require('./package/index.js');
const patternGenerator = require('./pattern/index.js');

module.exports = plop => {
  plop.setWelcomeMessage('Welcome. Please choose a generator.');
  plop.setGenerator('package', packageGenerator);
  plop.setGenerator('pattern', patternGenerator);
};
