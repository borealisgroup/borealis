const { clientAddonConfig } = require('@borealisgroup/cli-ui')

module.exports = {
  ...clientAddonConfig({
    id: 'org.vue.webpack.client-addon',
    port: 8096
  })
}
