import { userName, password } from "../../cypress.env.js";
describe("Social Media App: Valid user login with credential", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.clearLocalStorage();
    cy.wait(1000);
  });

  it("logs in using valid credentials", () => {
    //triggers login form
    cy.get("#registerForm button")
      .contains("Login")
      .should("be.visible")
      .click();
    cy.wait(1000);

    //login with correct credentials
    cy.get("input#loginEmail").type(userName);
    cy.get("input#loginPassword").type(password);
    cy.get("#loginForm button").contains("Login").click();
    cy.wait(1000);
  });
});
