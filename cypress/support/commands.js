// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload';

Cypress.Commands.add("Login", (email = Cypress.env("userEmail"), pass = Cypress.env("pass")) => {
    const emailPath = ".input-group.mb-3 > .form-control"
    const passPath = ".input-group.mb-4 > .form-control"
    const submitPath = ".btn.btn-primary.px-4"

    cy.get(emailPath).type(email)
    cy.get(passPath).type(pass)
    cy.get(submitPath).click({force:true})

})

