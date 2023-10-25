import CommonPage from "../pages/commonpage.po";
import LoginPage from "../pages/loginpage.po";
import ProductPage from "../pages/productpage.po";

Cypress.Commands.add("buyProduct", () => {
  const commonpage = new CommonPage();
  const loginpage = new LoginPage();
  const productpage = new ProductPage();

  // register click
  commonpage.clickLoginLink();

  // user login
  const user = Cypress.env("username");
  const password = Cypress.env("password");
  loginpage.userLogin(user, password);

  // assert success
  commonpage.verifyMyAccount("My account");

  // serach product and navigate to product page
  commonpage.getSearchProductLoc().clear();
  commonpage
    .getSearchProductLoc()
    .type("Apple")
    .wait(2000)
    .then(() => {
      cy.contains("Apple MacBook Pro 13-inch")
        .click({ force: true })
        .then(() => {
          productpage.getProductNameLoc().should("be.visible");
          productpage.getPriceLoc().should("be.visible");
          productpage.getAddToCartLoc().should("be.visible");
          productpage
            .getAddToCartLoc()
            .click()
            .then(() => {
              cy.contains(
                "The product has been added to your shopping cart"
              ).should("be.visible");
            });
        });
    });
});
