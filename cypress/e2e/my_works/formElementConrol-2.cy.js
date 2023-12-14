/// <reference types="cypress" />
context("form element kontrolleri", () => {
    it("check box ve input type", () => {
        //şehir seçimi yapmak için önce ikona tıklayıp şehirleri açacağız.
        //Ardından input alanını seçip aratmak istediğimiz şehri aratıp entera basacağız..
        cy.visit()
        cy.get().click() 
        cy.get().type("aranacak şehir adı").type('{enter}').should("be.checked")

    })
})