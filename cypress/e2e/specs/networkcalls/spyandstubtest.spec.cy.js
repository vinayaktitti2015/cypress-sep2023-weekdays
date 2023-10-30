describe("intercept the network calls", () => {
  it("spy the network call", () => {
    // network calls
    cy.intercept(
      "POST",
      "https://www.instagram.com/api/v1/web/accounts/login/ajax/",
      {
        statusCode: 200,
        body: {
          message: "Your password is correct",
          status: "Pass",
        },
      }
    ).as("response");

    // switch to ui automation
    cy.visit("https://www.instagram.com/");
    cy.contains("Allow all cookies").click();
    cy.contains("Log In").click();
    cy.get('[name="username"]').clear().type("a934343434");
    cy.get('[name="password"]').clear().type("wdewe23");
    cy.get('[type="submit"]')
      .click()
      .then(() => {
        // switch to network calls
        cy.wait("@response").should(({ response }) => {
          expect(response.body).to.have.property("status", "Pass");
          expect(response.body).to.have.property(
            "message",
            "Your password is correct"
          );

          expect(response.statusCode).to.equal(200);
        });
      });
  });
});
