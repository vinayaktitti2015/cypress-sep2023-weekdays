// test suite
describe("login feature", () => {
  // hooks
  beforeEach(() => {
    cy.visit("/web/index.php/auth/login");
  });

  // test cases
  it.only("test login with css selectors", () => {
    cy.get('[name="username"]').clear().type("Admin");
    cy.get('[name="password"]').clear().type("admin123");
    cy.get('[type="submit"]')
      .click()
      .then(() => {
        // callback function in JS
        cy.contains("Dashboard").should("be.visible"); // promise assertion that element exist
        // add comments
        // update login
      });
  });

  it.skip("test login with xpath selectors", () => {
    cy.xpath("//input[@placeholder='Username']").clear().type("Admin");
    cy.xpath("//input[@placeholder='Password']").clear().type("admin123");
    cy.xpath("//button[@type='submit']")
      .click()
      .then(() => {
        cy.contains("Dashboard").should("be.visible");
      });
  });

  it("test login with cypress playground selectors", () => {
    cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input")
      .clear()
      .type("Admin");
    cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input")
      .clear()
      .type("admin123");
    cy.get(".oxd-button")
      .click()
      .then(() => {
        cy.contains("Dashboard").should("be.visible");
      });
  });
});
