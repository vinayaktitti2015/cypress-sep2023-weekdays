class RegisterPage {
  getGender() {
    return cy.get("#gender-male");
  }

  getFirstName() {
    return cy.get("#FirstName");
  }

  getLastName() {
    return cy.get("#LastName");
  }

  getEmail() {
    return cy.get("#Email");
  }

  getPassword() {
    return cy.get("#Password");
  }

  getConfirmPassword() {
    return cy.get("#ConfirmPassword");
  }

  getRegisterButton() {
    return cy.get("#register-button");
  }

  getResult() {
    return cy.get(".result");
  }

  formSubmission(firstName, lastName, email, password) {
    this.getGender().check();
    this.getFirstName().clear().type(firstName);
    this.getLastName().clear().type(lastName);
    this.getEmail().clear().type(email);
    this.getPassword().clear().type(password);
    this.getConfirmPassword().clear().type(password);
    this.getRegisterButton().click();
  }

  verifyRegistrationMessage(args) {
    this.getResult().should("have.text", args);
  }
}

export default RegisterPage;
