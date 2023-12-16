/// <reference types="cypress" />

context("first test", () => {
    // Her test boş bir sayfayla başlar. Bu nedenle testlerin yapılacağı sayfaya yönlendirme yapmak gerekir.
    it("visit", () => {
        cy.visit("https://newseasonn35.com/")
    })

    // Protokol doğrulama
    it("protocol doğrulama", () => {
        cy.location("protocol").should("eq","https:")
    })

    // Sayfadaki text kontrolü yapıldı.
    it("text control",() => {
        cy.get('body > div > div.page-wrapper.js-smooth-scroll.smooth-scroll > div.scroll-content > main > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-0bd9285.elementor-section-full_width.section_minus-mt-large.bg-dark.elementor-section-height-default.elementor-section-height-default > div > div > div > div > div > div > div.container.section-services__inner > div > div:nth-child(1) > a > div.section-services__wrapper-button > div > div.link-arrow__label').should("have.text", "Daha Fazla Bilgi")
    })
})