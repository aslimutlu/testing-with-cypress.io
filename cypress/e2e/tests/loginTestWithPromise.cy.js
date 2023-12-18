/// <reference types="cypress" />

import helper from "../../support/helper"

context("promise", () => {

    it("promise return", async () => {
        cy.visit("https://admin-template-jet.vercel.app/#/pages/login")
        const test = helper.GetTextFuntion_("form > .text-medium-emphasis")
        cy.log(test)
    })

})