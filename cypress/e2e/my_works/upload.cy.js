/// <reference types="cypress" />

context("upload", () => {
    it("dosya yükleme", () => {
        cy.visit()
        cy.get().attachFile("cypress/fixtures/cypress.txt")
        cy.get().should("have.text", "dogrulanacakDosyaAdi")
    })
})