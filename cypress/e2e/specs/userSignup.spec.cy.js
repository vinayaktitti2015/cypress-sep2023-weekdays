import CommonPage from "../../pages/commonpage.po";
import RegisterPage from "../../pages/registerpage.po";

describe("user sign up feature", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("BASEURL"));
  });
  it.only("test form submission successfully", () => {
    const commonpage = new CommonPage();
    const registerpage = new RegisterPage();

    // register click
    commonpage.clickRegisterLink();

    // calling the fixture file data
    cy.fixture("user").then((data) => {
      registerpage.formSubmission(
        data.firstname,
        data.lastname,
        data.email,
        data.password
      );

      // assert success
      registerpage.verifyRegistrationMessage(data.message);
    });
  });
});
