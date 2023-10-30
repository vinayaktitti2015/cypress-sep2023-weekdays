describe("intercept the network calls", () => {
  it("spy the network call", () => {
    // network calls
    cy.intercept(
      "GET",
      "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
    ).as("response");

    // switch to ui automation
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    // Invalid credentials
    try {
      cy.get('[name="username"]', { timeout: 10000 }).clear().type("Admin");
      cy.get('[name="password"]', { timeout: 10000 }).clear().type("admin123");
      cy.get('[type="submit"]', { timeout: 10000 })

        .click()
        .then(() => {
          // switch to network calls
          cy.wait(5000); // static wait
          cy.wait("@response").should(({ response }) => {
            expect(response.statusCode).to.equal(200);
          });
        });
    } catch (e) {
      //throw e;
      console.error(e.message);
    }
  });
});
