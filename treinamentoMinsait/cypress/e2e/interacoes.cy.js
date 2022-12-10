/// <reference types="cypress" />
describe("Interações com select, radio e checks", () => {
    beforeEach(()=>{
        cy.visit("http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
    })

    it("Validando interações", () => {
        cy.get("#dropdowm-menu-1").select("c#")
        
        cy.get('[type="checkbox"]').check("option-1")
        .should("be.checked")
        cy.get('[type="checkbox"]').uncheck("option-3")
        .should("not.be.checked")
        
        cy.get('input[value="blue"]').click()
        cy.get('input[value="yellow"]').check()
        cy.get('input[value="blue"]').should("not.be.checked")
    })

    it.only("Exercício validação de interações", () => {
        cy.get('input[value="pumpkin"]').click()
        .should("be.checked")
        cy.get("#fruit-selects").select("apple")
        .and('have.value', 'apple')
    })

})