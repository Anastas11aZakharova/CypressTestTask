const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://conduit.realworld.how/',
    defaultCommandTimeout: 10000,
    viewportWidth:1280,
    viewportHeight:720,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
