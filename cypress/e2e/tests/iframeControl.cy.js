/// <reference types="cypress" />

context("iframe test etme", () => {

    const getIframeDocument = () => {
        //iframe altındaki contentDocument'e ulaşıyoruz. Ve dokumant'in olduğunu doğruluyoruz.
        return cy.get("iframe pathi").its("0.contentDocument").should("exist")
    }

    const getIframeBody = () => {
        return getIframeDocument().its("body").should("not.be.undefined").then(cy.wrap)
        //then(): bir önceki komuttan elde edilen konu ile çalışmamızı sağlar.
        //elementi kullanabilmek için .then(cy.wrap) yapısına ihtiyaç var.
        //.wrap() işlevine aktarılan nesneyi verir. Nesne bir promise ise, çözümlenmiş değerini verir.
    }

    it("iframe test", () => {
        cy.visit("ziyaret edilecek sayfanın urli")
        getIframeBody().find("#name").should("have.text", "cypress_")
        getIframeBody.find("#surname").should("have.text", "test")
    })
})