describe("delete records from db", () => {
  it("verify delete endpoint", () => {
    cy.request({
      method: "DELETE",
      url: Cypress.env("APIBASEURL") + "/api/users/2",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      expect(res.status).to.equal(204);
    });
  });
});
