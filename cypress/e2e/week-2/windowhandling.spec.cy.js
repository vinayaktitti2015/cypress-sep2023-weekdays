describe("window handling", () => {
  it("test child window", () => {
    cy.visit("https://demoqa.com/browser-windows", {
      onBeforeLoad(win) {
        cy.stub(win, "open").as("childwindow");
      },
    });

    cy.get("#windowButton")
      .click()
      .then(() => {
        // switch to the new window
        cy.window().its("open").should("be.calledOnce");
        cy.get("@childwindow").then((url) => {
          cy.visit("https://demoqa.com" + url.args[0][0]);
          url.restore;
          cy.contains("This is a sample page").should("be.visible");

        });
      });

    // switch back to main page
    cy.visit("https://demoqa.com/browser-windows");
  });
});
