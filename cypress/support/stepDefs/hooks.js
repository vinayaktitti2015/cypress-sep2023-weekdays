const { Before, After } = require("cypress-cucumber-preprocessor/steps");

Before(() => {
  cy.log("before hooks called");
  cy.visit("/web/index.php/auth/login");

  // login here
});

After(() => {
  cy.log("after hooks called");
});
