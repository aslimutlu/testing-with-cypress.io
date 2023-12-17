/// <reference types="cypress" />

context("login control test", () => {
    it("login test", () => {
        cy.visit("https://admin-template-jet.vercel.app/#/pages/login")
        cy.Login()
    })
})