class CommonPage {
  getRegisterLoc() {
    return cy.get(".ico-register");
  }

  getLoginLoc() {
    return cy.get(".ico-login");
  }

  getMyAccount() {
    return cy.get(".ico-account");
  }

  getSearchProductLoc() {
    return cy.get("#small-searchterms");
  }

  getSearchProductButtonLoc() {
    return cy.get("search-box-button");
  }

  clickRegisterLink() {
    this.getRegisterLoc().click();
  }

  clickLoginLink() {
    this.getLoginLoc().click();
  }

  verifyMyAccount(args) {
    this.getMyAccount().should("have.text", args);
  }
}

export default CommonPage;
