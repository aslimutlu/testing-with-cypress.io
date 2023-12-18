/// <reference types="cypress" />


class helper{
    static GetTextFuntion(elementPath){
        cy.get(elementPath).invoke("text").then((text) => {
            return text
        })
    }

    static async GetTextFuntion_(elementPath){
        let promise = new Cypress.Promise((resolve, reject) => {
            cy.get(elementPath).invoke("text").then((text) => {
                res(text.trim())
            })
        });

        let result = await promise;
        return result;
    }
}

export default helper