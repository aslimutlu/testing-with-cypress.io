/// <reference types="cypress" />


context("form element kontrolleri", () => {

    it("input box", () => {
        cy.visit(Cypress.config("baseUrl"))
        cy.visit("https://admin-template-jet.vercel.app/dashboard#/forms/floating-labels")
        //input alanda default olarak gelen mail adresini silmek için;
        cy.get("input#floatingInputValue").clear()
    })

    it("editleme", () => {
        cy.reload()
        //input alanda default olarak gelen mail adresini editlemek için;
        cy.get("input#floatingInputValue").clear()
        cy.get("input#floatingInputValue").type("deneme@deneme.com")
    })

    it("input alan kontrolü", () => {
        cy.reload()
        //input alandaki textin kontrolü;
        cy.get("input#floatingInputValue").clear()
        cy.get("input#floatingInputValue").type("deneme@deneme.com")
        cy.get("input#floatingInputValue").should("have.value", "deneme@deneme.com")
    })

    it("radio button", () => {
        cy.visit("https://admin-template-jet.vercel.app/dashboard#/forms/checks-radios")
        cy.get("div:nth-of-type(1) > input[name='flexRadioDefault']").check({force: true})
        //type'ı radio olan 7 buton bulduğu için test hata verdi. {force: true} kullanarak seçtiğimiz elemente girmesini sağlayabiliriz.
    })
    
})