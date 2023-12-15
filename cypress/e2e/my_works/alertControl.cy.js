/// <reference types="cypress" />

import { startCase } from "cypress/types/lodash"

context("upload", () => {
    it("dosya yükleme", () => {
        cy.visit()
        //alert için click işlemi yapıldı.
        cy.get().click()
        //click isleminden sonra cypress ekranında alert görüntülenmiyor.
        //alert verildiğinde diğer form elemanlarıyla işlem yapılamadığı için bu şekilde önlem alınmış.
        cy.on("window:alert", (str) => {
            expect(str).to.equal("Cypress alert control!")
        })
    })
})