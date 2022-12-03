
/// <reference types="cypress" />
describe("Minha primeira suite de testes.", () => {

    it("Validar acesso a URL", () => {
        cy.visit("https://www.saucedemo.com/")
    })

    it("Validar login com sucesso", () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get("#user-name").type("standard_user")
    })
})