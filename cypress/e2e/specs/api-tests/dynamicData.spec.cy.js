const payload = require("../../fixtures/payload.json");
import { faker } from "@faker-js/faker";
describe("fetch token", () => {
  it("validate fetch token api", () => {
    cy.request({
      method: "POST",
      url: Cypress.env("APIBASEURL") + "/auth/login",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        username: faker.internet.userName(),
        password: faker.internet.password(),
      },
    }).then((res) => {
      expect(res.status).to.equal(200);

      const token = res.token;
      console.log(token);

      cy.writeFile("cypress/fixtures/res.json", { res: res });
    });
  });
});
