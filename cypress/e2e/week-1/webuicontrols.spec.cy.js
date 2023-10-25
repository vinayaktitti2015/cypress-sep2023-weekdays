describe("webui controls", () => {
  beforeEach(() => {
    cy.visit("https://www.globalsqa.com/samplepagetest/");
  });
  it("test the form submission", () => {
    // upload the file
    cy.get("input[name='file-553']").selectFile("cypress/fixtures/image.jpg");

    // test data handling using fixtures
    cy.fixture("example.json").then((data) => {
      // input fields
      cy.get("#g2599-name").type(data.name);
      cy.get("#g2599-email").type(data.email);
      cy.get("#g2599-website").type(data.website);

      // dropdown selection
      cy.get("#g2599-experienceinyears").select(data.exp);

      // checkbox and radio buttons
      cy.get("input[value='Automation Testing']").check();
      cy.get("input[value='Post Graduate']").check();

      // alert box
      cy.get("button[onclick='myFunction()']")
        .click()
        .then(() => {
          cy.on("window:alert", (alert) => {
            expect(alert).to.equal("Do you really fill rest of the form?");
            cy.on("window:confirm", () => true);
            cy.on("window:confirm", () => true);
          });
        });

      cy.get("#contact-form-comment-g2599-comment").type(data.comments);

      cy.get("button[type='submit']")
        .click()
        .then(() => {
          cy.contains("Message Sent (go back)").should("be.visible");
        });
    });
  });
});
