/// <reference types="cypress" />

context("select & multiple select element", () => {
    it("select", () => {
        cy.visit()
        cy.get(option-xpathi).select("optionAdi").should("have.value", "optionAdi")
    })

    it("multi select", () => {
        cy.visit()
        cy.get(option-xpathi).select(["optionAdi", "optionAdi2", "optionAdi2"]).invoke("val").should("deep.equal", ["optionAdi", "optionAdi2", "optionAdi2"])
        //invoke() ile doğrulanacak değerlerin value olduğunu belirttik.
    })
})