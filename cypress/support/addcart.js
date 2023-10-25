import CommonPage from "../pages/commonpage.po";
import LoginPage from "../pages/loginpage.po";
import ProductPage from "../pages/productpage.po";

Cypress.Commands.add("checkout", () => {
  const commonpage = new CommonPage();
  const loginpage = new LoginPage();
  const productpage = new ProductPage();
  
});
