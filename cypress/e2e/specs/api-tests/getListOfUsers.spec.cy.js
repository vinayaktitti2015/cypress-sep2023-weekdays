const payload = require("../../fixtures/payload.json");
var assert = require("chai").assert;
describe("fetch get list of users", () => {
  it("fetch get list of users", () => {
    cy.request({
      method: "GET",
      url: Cypress.env("APIBASEURL") + "/api/users?page=2",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      expect(res.status).to.equal(200);

      expect(res.body).to.have.property("page", 2);
      //expect(res.body.data[1].email).to.equal("lindsay.ferguson@reqres.in");

      assert.isNotNull(res.body.data[1].email, "Email field not found");
      cy.writeFile("cypress/fixtures/res.json", { res: res });
    });
  });
});
