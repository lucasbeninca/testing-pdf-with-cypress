const { defineConfig } = require("cypress");
const { readPdf } = require('cypress/scripts/readPdf.js');

module.exports = defineConfig({
  e2e: {

    chromeWebSecurity: false,

    setupNodeEvents(on, config) {
      on('task', {
        readPdf
      });
    },


    // Remove the baseUrl option
    trashAssetsBeforeRuns: false

  }
});
