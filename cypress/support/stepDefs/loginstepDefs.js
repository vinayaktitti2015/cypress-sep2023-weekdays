import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import LoginPageClass from "../../pageobjects/cucumber.loginpage.po";
import { LoginPageExport as LoginPage } from "../../pageobjects/cucumberexport.loginpage.po";

//const page = new LoginPageClass()
Given(/^I open the url$/, () => {
  cy.visit("/web/index.php/auth/login");
});

When(/^I enter username$/, () => {
  // page.enterUsername()
  LoginPage.enterUsername();
});

When(/^I enter password$/, () => {
  //page.enterPassword()
  LoginPage.enterPassword();
});

When(/^I click login$/, () => {
  // page.clickLogin()
  LoginPage.clickLogin();
});

Then(/^I should see dashboard$/, () => {
  //page.verifyDashboard()
  LoginPage.verifyDashboard();
});

Then("I should see textlabel {string}", (string) => {
  cy.contains(string).should("be.visible");
});

When(`I type username as {string}`, (string) => {
  LoginPage.typeUsername(string);
});

Given(`I type password as {string}`, (string) => {
  LoginPage.typePassword(string);
});

Then(`I should see {string}`, (string) => {
  LoginPage.verifyDashboardText(string);
});

When(/^I enter username and password$/, (table) => {
  table.hashes().forEach((ele) => {
    LoginPage.typeUsername(ele.username);
    LoginPage.typePassword(ele.password);
    LoginPage.clickLogin();
  });
});

Then("I capture screenshot", () => {
  cy.screenshot("login");
});


Then(/^Create new step defs$/, (  ) =>{
  throw 'pending';
} );

Then(/^implement new stepdefinition$/, (  ) =>{
  throw 'pending';
} );
