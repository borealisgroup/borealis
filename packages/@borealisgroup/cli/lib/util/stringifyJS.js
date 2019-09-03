module.exports = function stringifyJS(value) {
  const { stringify } = require('javascript-stringify');

  // eslint-disable-next-line no-shadow
  return stringify(
    value,
    (val, indent, cbStringify) => {
      if (val && val.__expression) {
        return val.__expression;
      }
      return cbStringify(val);
    },
    2
  );
};
