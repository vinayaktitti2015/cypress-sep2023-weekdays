describe("handling tabs", () => {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/windows");
  });
  it("remove the target attr", () => {
    cy.get(".example h3 + a").invoke("removeAttr", "target").click();

    cy.url().should("equal", "https://the-internet.herokuapp.com/windows/new");
    cy.contains("New Window").should("be.visible");

    cy.visit("https://the-internet.herokuapp.com/windows");
  });

  it("remove the target attr", () => {
    let parentWindow;

    cy.window().then((win) => {
      parentWindow = win;
    });

    // remove the target attr
    cy.get(".example h3 + a").invoke("removeAttr", "target").click();

    // switch to tha new tab
    cy.url().should("equal", "https://the-internet.herokuapp.com/windows/new");
    cy.contains("New Window").should("be.visible");

    //const parenturl = cy.wrap(parentWindow).its("location.href");
    // switching to the parent window or tab

    // switch back to the parent window
    cy.wrap(parentWindow).then(($win) => {
      url = $win.prop("href");
      cy.visit(url);
    });
  });

  it.only("should handle using href link", () => {
    cy.get(".example h3 + a").then(($el) => {
      const url = $el.prop("href");

      // visit the tab
      cy.visit(url);

      // switch to tha new tab
      cy.url().should(
        "equal",
        "https://the-internet.herokuapp.com/windows/new"
      );
      cy.contains("New Window").should("be.visible");
    });

    cy.visit("https://the-internet.herokuapp.com/windows");
  });
});
