import { userName } from "../../cypress.env.js";
// const userName = "ronburgundy@noroff.no";
// const password = "reallyhardpassword333";

describe("Login using wrong password to get error message", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.clearLocalStorage();
    cy.wait(1000);
  });

  it("Fails using of invalid password", () => {
    //triggers login form
    cy.get("#registerForm button")
      .contains("Login")
      .should("be.visible")
      .click();
    cy.wait(1000);

    //log in with wrong credentials/password
    cy.get("input#loginEmail").type(userName);
    cy.get("input#loginPassword").type("wrongCredential", { delay: 200 });
    cy.get("#loginForm button").contains("Login").click();
    cy.wait(1000);

    //gets message in cypress with assert expected, shows a status 404
    cy.on("window:alert", (message) => {
      expect(message).to.eq(
        "Either your username was not found or your password is incorrect"
      );
    });
  });
});
