describe("test suite", () => {
  before(() => {
    cy.log("before test suite");
    // DB tests
    // API call
  });

  beforeEach(() => {
    cy.log("before test case");
    // UI call
    cy.visit("https://testautomationpractice.blogspot.com/");
    // login method
  });
  it("TC 001", () => {
    cy.log("executing test case 001");
  });

  it("TC 002", () => {
    cy.log("executing test case 002");
  });

  it("TC 003", () => {
    cy.log("executing test case 003");
  });

  afterEach(() => {
    cy.log("after the test case run");
  });

  after(() => {
    cy.log("after the test suite run");
  });
});
