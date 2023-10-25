class ProductPage {
    getProductNameLoc() {
      return cy.get(".product-name");
    }
  
    getPriceLoc() {
      return cy.get("#price-value-4");
    }
  
    getAddToCartLoc() {
      return cy.get("#add-to-cart-button-4");
    }
  
    userLogin(username, password) {
      this.getEmail().clear().type(username);
      this.getPassword().clear().type(password);
      this.getLoginBtn().click();
    }
  }
  
  export default ProductPage;