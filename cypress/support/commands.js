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

Cypress.Commands.add("insertRecords", (args) => {
  const query = args;

  cy.task("queryDB", query).then((results) => {
    cy.log("results", JSON.stringify(results));
  });
});

Cypress.Commands.add("fetchRecords", (url) => {
  const query = "SELECT * FROM Customers";

  cy.task("queryDB", query).then((results) => {
    expect(results.length).to.equal(1);
    expect(results[0].LastName).to.equal("Doe");
    expect(results[0].FirstName).to.equal("John");
  });
});

Cypress.Commands.add("updaterecords", function () {
  // update query
  const query =
    'UPDATE Customers SET Address ="Hyderabad telangana" WHERE PersonID = 1';

  cy.task("queryDB", query).then((results) => {
    cy.log("results", JSON.stringify(results));
  });

  // fetch the results from the database
  const fetchQuery = "SELECT * FROM Customers";
  cy.task("queryDB", fetchQuery).then((results) => {
    //expect(results.length).to.equal(1);
    expect(results[0].Address).to.equal("Bangalore");
  });
});

Cypress.Commands.add("deleteRecord", function (args) {
  const query = args;

  cy.task("queryDB", query).then((results) => {
    //expect(results.length).to.equal(0);
    cy.log("results", JSON.stringify(results));
  });
});
