class LoginPage {
  getEmail() {
    return cy.get("#Email");
  }

  getPassword() {
    return cy.get("#Password");
  }

  getLoginBtn() {
    return cy.get(".login-button");
  }

  userLogin(username, password) {
    this.getEmail().clear().type(username);
    this.getPassword().clear().type(password);
    this.getLoginBtn().click();
  }
}

export default LoginPage;