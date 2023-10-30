describe("intercept the network calls", () => {
  it("spy the network call", () => {
    // network calls
    cy.intercept(
      "POST",
      "https://www.instagram.com/api/v1/web/accounts/login/ajax/"
    ).as("response");

    // switch to ui automation
    cy.visit('https://www.instagram.com/')
    cy.contains("Allow all cookies").click()
    cy.contains("Log In").click()
    // Invalid credentials
    cy.get('[name="username"]').clear().type("a934343434");
    cy.get('[name="password"]').clear().type("wdewe23");
    cy.get('[type="submit"]')
      .click()
      .then(() => {
        // switch to network calls
        cy.wait("@response").should(({ response }) => {
          expect(response.body).to.have.property("status", "fail");
          expect(response.body).to.have.property(
            "message",
            "Sorry, your password was incorrect. Please double-check your password."
          );

          expect(response.statusCode).to.equal(403);
        });
      });
  });
});
