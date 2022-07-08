const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      baseURL: "https://www.globalsqa.com/angularJs-protractor/BankingProject"
    },
  },
});
