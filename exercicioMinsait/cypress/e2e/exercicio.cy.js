describe('exercicio em sala de aula', () => {
  beforeEach(() => {
    cy.visit("https://demo.automationtesting.in/Register.html")
    cy.get("input[ng-model='FirstName']").type("Thiago")
    cy.get("input[ng-model='LastName']").type("Silva")
    cy.get("input[ng-model='EmailAdress']").type("google@google.com")
    cy.get("input[ng-model='Phone']").type("0123456789")
    cy.get("input[ng-model='radiovalue']").check("Male")
    //cy.get("input[ng-model='country']").type("Select Country")
    cy.get("#submitbtn").click()
  })

  it('Validar envio do formulário', () => {
    cy.get('#submitbtn').should('not.be.visible')
  })
})