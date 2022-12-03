
/// <reference types="cypress" />
describe("Minha primeira suite de testes.", () => {
    beforeEach(()=>{
        cy.visit("/")
        cy.get("#user-name").type("standard_user")
        cy.get("#password").type("secret_sauce")
        cy.get("#login-button").click()
    })

    it("Validar login com sucesso", () => {
        cy.get(".app_logo").should("be.visible")
    })

    it("Validar adicionar produto no carrinho", () => {
        cy.get("#add-to-cart-sauce-labs-backpack").click()
        cy.get("#remove-sauce-labs-backpack").should("have.text", "Remove")
        cy.get(".shopping_cart_badge").should("be.visible")
    })

})