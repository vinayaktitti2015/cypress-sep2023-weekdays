describe("iframes feature", () => {
  it("test iframe using cypress-iframe plugin", () => {
    cy.visit("https://demoqa.com/frames");
    //cy.frameLoaded();
    cy.iframe("#frame1").find("h1").should("be.visible");

    cy.iframe("#frame1")
      .find("h1")
      .then(($el) => {
        const text = $el.text();
        expect(text).to.equal("This is a sample page");
      });
  });

  it("test iframe using custom command", () => {
    cy.visit("https://demoqa.com/frames");
    //cy.frameLoaded();
    cy.switchToIframe("#frame1").find("h1").should("be.visible");

    cy.switchToIframe("#frame1")
      .find("h1")
      .then(($el) => {
        const text = $el.text();
        expect(text).to.equal("This is a sample page");
      });
  });
});
