/// <reference types="cypress" />

context("snacbar message test", () => {
    
    it("login", () => {
        cy.visit("https://exampledomaincom")
        cy.get("inpu1_path").type("examplemail@example.com")
        cy.get("input2_path").type("12345")
        cy.get("button_path").click()

        cy.visit("https://exampledomaincom/forms") //visit edilen url'ler aynı test bloğu içerisindeyse super domainleri aynı olmalıdır.
        // ekranda birkaç saniye görünen bir snacbar'ın pathini inspect sayfasında source alanını kullanarak bulabiliriz.
        cy.get("snacbar_button_path").click() // snacbar'ın açılması için gerekli olan tıklanma
        cy.get("snackbar_path").should("be.visible") //görünürlüğünü test etmek için
        cy.wait(2000)
        cy.get("snackbar_path").should("not.be.visible")
    })
})