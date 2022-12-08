/// <reference types="cypress" />
describe('exercicio em sala de aula', () => {
  beforeEach(()=>{
    cy.visit("https://demo.automationtesting.in/Register.html")
  })

  it("Validar campo email", () => {
    cy.get('#FirstName').type('google@google.com')
  })
})