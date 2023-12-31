// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// global reusable functions
Cypress.Commands.add("userLogin", () => {
  cy.log("User login successfully");
});

Cypress.Commands.add("userSignup", () => {
  cy.log("User signup successfully");
});

// parameterized commands
Cypress.Commands.add("userLogin", (username, password) => {
  cy.log(
    "User login successfully with username: " +
      username +
      " and password: " +
      password
  );
});

Cypress.Commands.add("switchToIframe", (iframe) => {
  return cy
    .get(iframe)
    .its("0.contentDocument.body")
    .should("be.visible")
    .then(cy.wrap);
});

Cypress.Commands.add("parseXlsx", (url) => {
  return cy.task("parseXlsx", { url: url });
});
