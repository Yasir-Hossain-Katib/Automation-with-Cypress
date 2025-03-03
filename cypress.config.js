const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    video:true,
    screenshotOnRunFailure:true,
    watchForFileChanges:false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
