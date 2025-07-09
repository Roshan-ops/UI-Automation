const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome", 
  reporterOptions: {
    reportDir: "cypress/reports",  
    overwrite: false,
    html: true,
    json: true
  },
  projectId: "9quvzt",
  e2e: {
    baseUrl: "https://practice.expandtesting.com",
    setupNodeEvents(on, config) {
      // Plugins or event listeners
    },
  },
});
