module.exports = {
  presets: [['@babel/preset-env']],
  plugins: [
    ['@babel/plugin-proposal-object-rest-spread'],
    ['inline-json-import', {}],
  ],
};
