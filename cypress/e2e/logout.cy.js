import { userName, password } from "../../cypress.env.js";
// const userName = "ronburgundy@noroff.no";
// const password = "reallyhardpassword333";
describe("Social Media App: User can log out of app profile", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.clearLocalStorage();
    cy.wait(1000);

    //shows the user login to then trigger logout()
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

  //user logs out
  it("logs user out of app", () => {
    cy.wait(2000);
    cy.get("header button").contains("Logout").click();
  });
});
