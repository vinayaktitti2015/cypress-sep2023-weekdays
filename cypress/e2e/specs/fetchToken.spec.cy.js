const payload = require("../../fixtures/payload.json");
const data = require("../../fixtures/credentials.json");
describe("fetch token", () => {
  it("validate fetch token api", () => {
    cy.request({
      method: "POST",
      url: Cypress.env("APIBASEURL") + "/auth/login",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        username: data.productsA.username,
        password: data.passwordA.password,
      },
    })
      .then((res) => {
        expect(res.status).to.equal(200);

        const token = res.token;
        console.log(token);

        cy.writeFile("cypress/fixtures/token.json", { token: res.body.token });

        return token;
      })
      .then((token) => {
        cy.request({
          method: "GET",
          url: Cypress.env("APIBASEURL") + "/products",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }).then((res) => {
          expect(res.status).to.equal(200);
          cy.writeFile("cypress/fixtures/products.json", { res: res });

          //expect(res.body.products[0].images[0]).to.match(/r"\.jpg$"/);

          for (let i = 0; i < res.body.products; i++) {
            expect(res.body.products[i].images[0]).to.match(/^https/);
          }
        });
      });
  });
});
