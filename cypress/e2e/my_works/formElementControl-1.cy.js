/// <reference types="cypress" />

context("form element kontrolleri", () => {

    it.skip("input box", () => {
        cy.visit("maiAdresiLinki")
        //input alanda default olarak gelen mail adresini silmek için;
        cy.get("input-alanin-xpathi").clear()
    })

    it.skip("editleme", () => {
        cy.reload()
        //input alanda default olarak gelen mail adresini editlemek için;
        cy.get("input-alanin-xpathi").type("yazılmak istenen metin")
    })

    it.skip("input alan kontrolü", () => {
        cy.reload()
        //input alandaki textin kontrolü;
        cy.get("input-alanin-xpathi").should("have.value", "karşılaştırılacak metin")
    })

    it("radio button", () => {
        cy.visit("maiAdresiLinki")
        cy.get("radio butonun xpahthi").check("radio butonun value değeri", {force: true})
        //type'ı radio olan 7 buton bulduğu için test hata verdi. {force: true} kullanarak seçtiğimiz elemente girmesini sağlayabiliriz.
    })
    
})