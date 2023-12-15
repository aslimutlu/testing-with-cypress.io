/// <reference types="cypress" />
//upload testleri için aşağıdaki adresteki adımlar yapılmalı.
//https://www.npmjs.com/package/cypress-file-upload 
context("upload", () => {
    it("dosya yükleme", () => {
        cy.visit()
        cy.get().attachFile("cypress/fixtures/cypress.txt")
        cy.get().should("have.text", "dogrulanacakDosyaAdi")
    })
})