// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// global imports for files
// Import commands.js using ES2015 syntax:
import "./commands";

import "cypress-iframe";
require('cypress-downloadfile/lib/downloadFileCommand')
require('cy-verify-downloads').addCustomCommand();


// import any package globally

// Alternatively you can use CommonJS syntax:
// require('./commands')

// before hooks
// after hooks

// global imports for packages/plugins
// require("@xpath_cypress");

// global listerners
Cypress.on("uncaught:exception", (error) => {
  return false;
});
