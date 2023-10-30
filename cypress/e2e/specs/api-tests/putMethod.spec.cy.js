const payload = require("../../fixtures/payload.json");
var assert = require("chai").assert;

describe("update the records", () => {
  it("verify user update endpoint", () => {
    cy.request({
      method: "PUT",
      url: Cypress.env("APIBASEURL") + "/api/users/2",
      headers: {
        "Content-Type": "application/json",
      },
      body: payload,
    }).then((res) => {
      expect(res.status).to.equal(200);
      expect(res.body.name).to.equal("morpheus");

      assert.isNotNull(res.body.updatedAt, "updatedAt field not found");
    })
  });
});
