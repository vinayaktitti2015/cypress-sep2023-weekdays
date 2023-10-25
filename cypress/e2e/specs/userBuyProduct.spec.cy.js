const testdata = require("../../fixtures/products.json");

describe("user sign up feature", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("BASEURL"));
  });
  it.only("test user buy product", () => {
    cy.buyProduct();

    console.log(testdata.products.books[0].book1);
  });
});
