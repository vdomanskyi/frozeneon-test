const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@/style/variables.scss"; @import "@/style/mixins.scss";',
      },
    },
  },
});
