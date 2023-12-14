/// <reference types="cypress" />

context("form element kontrolleri", () => {
    it("as kullanılmadan", () => {
        //bir test içerisinde bir path ile ilgili birden fazla işlem yapılacaksa as kullarak o pathe bir isim verilebilir.
        cy.visit()
        cy.get("[type = 'checkbox']").check("option1", {force:true}).should("be.checked") 
    })

    it("as kullanarak", () => {

        cy.visit()
        cy.get("[type = 'checkbox']").as("first-xpath")
        cy.get("@first-xpath").check("option1", {force:true}).should("be.checked") 
    })
})