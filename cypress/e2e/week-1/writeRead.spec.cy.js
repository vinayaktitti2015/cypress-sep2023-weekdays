describe("write and read file", () => {
  it("test txt file format", () => {
    cy.writeFile("cypress/fixtures/text.txt", "Hello Cypress!");
    cy.readFile("cypress/fixtures/text.txt").then((data) => {
      expect(data).to.equal("Hello Cypress!");
    });
  });

  it("test json file format", () => {
    cy.visit("https://the-internet.herokuapp.com/login");
    cy.get("em:nth-child(2)")
      .invoke("text") // jquery function
      .then((data) => {
        // callback function
        cy.writeFile("cypress/fixtures/credentials.json", { password: data });
        cy.readFile("cypress/fixtures/credentials.json").then((data) => {
          expect(data.password).to.equal("SuperSecretPassword!");
        });
      });
  });

  it.only("fetch dropdown value", () => {
    cy.visit("https://testautomationpractice.blogspot.com/");
    cy.get("#country")
      .select("Germany")
      //.invoke("select", "Germany")
      .invoke("val")
      .should("match", /germany/);
  });
});
