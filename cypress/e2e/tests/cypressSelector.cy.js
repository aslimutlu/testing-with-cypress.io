/// <reference types="cypress" />

context("cypress selector", () => {
    const adSoyad = "asli mutlu"
    const mailAdres_hatali = "asasasas"
    const mailAdres_dogru = "deneme@gmail.com"
    const mesaj = "merhabalar"
    
    it("path kullanımı", () => {
        cy.visit("https://newseasonn35.com/contacts/")
        cy.get(':nth-child(2) > :nth-child(1) > .input-float > .wpcf7-form-control-wrap > .wpcf7-form-control').type(adSoyad)
        cy.get(':nth-child(2) > .input-float > .wpcf7-form-control-wrap > .wpcf7-form-control').type(mailAdres_hatali)
        cy.get('.col > .input-float > .wpcf7-form-control-wrap > .wpcf7-form-control').type(mesaj)
        cy.wait(3000)
        cy.get('.button').click()
        cy.wait(5000) //animasyonlar veya zamanla sorunu sebebiyle click çalışmadı. Sorunun çzöümü için ".click({force: true})" eklenebilir, ya da wait verilebilir.  
        cy.get('.wpcf7-response-output').should("have.text","Bir veya daha fazla alanda hata bulundu. Lütfen kontrol edin ve tekrar deneyin." )

    })

    it("dogru bilgiler ile test", () => {
        cy.get(':nth-child(2) > :nth-child(1) > .input-float > .wpcf7-form-control-wrap > .wpcf7-form-control').type(adSoyad)
        cy.get(':nth-child(2) > .input-float > .wpcf7-form-control-wrap > .wpcf7-form-control').type(mailAdres_dogru)
        cy.get('.col > .input-float > .wpcf7-form-control-wrap > .wpcf7-form-control').type(mesaj)
        cy.wait(3000)
        cy.get('.button').click()
        cy.get('strong').should("have.text", "Mesajınız gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.")

    })


})