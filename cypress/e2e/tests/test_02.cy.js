/// <reference types="cypress" />

context("tarayıcı fonksiyonları", () => {
    const url1 = "https://newseasonn35.com/services/home"
    const url2 = "https://newseasonn35.com/"
    it("geri gelme", () => {
        cy.visit(url2)
        cy.wait(4000)
        cy.visit(url1)
        cy.go("back") // cy.go(-1)
        cy.url().should("eq","https://newseasonn35.com/" )
    })

    it("ileri gitme", () => {
        cy.go("forward") // cy.go(1)
        cy.url().should("include", "home")
    })

    it("reload", () => {
        cy.visit("https://newseasonn35.com/contacts/")
        cy.pause()
        cy.reload() // sayfa tekrardan yüklendi.

    })
     
})