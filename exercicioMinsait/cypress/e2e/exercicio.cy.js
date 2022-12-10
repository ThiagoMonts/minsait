/// <reference types="cypress" />

describe('exercicio em sala de aula', () => {
  beforeEach(() => {
    cy.visit('https://demo.automationtesting.in/Register.html')
  })

  it('Preencher campos do formulário', () => {
    var user = {
      firstName: "Thiago",
      lastName: "Silva",
      adress: "Avenida Epitácio Pessoa, 100",
      email: "google@google.com",
      phoneNumber: "0123456789",
      password: "password",
      confirmPassword: "password",
      btnSubmit: "Submit",
    }

    cy.get("input[ng-model='FirstName']").type(user.firstName)
    cy.get("input[ng-model='LastName']").type(user.lastName)
    cy.get("textarea[ng-model='Adress']").type(user.adress)
    cy.get("input[ng-model='EmailAdress']").type(user.email)
    cy.get("input[ng-model='Phone']").type(user.phoneNumber)
    cy.get("input[ng-model='radiovalue']").check("Male")
    cy.get("#checkbox1").click()
    cy.get("#msdd").click()
    cy.get(":nth-child(1) > .ui-corner-all").click()
    cy.get(":nth-child(30) > .ui-corner-all").click()
    cy.get("#header .row h1").click()
    cy.get("#Skills").select("Android")
    cy.get("#countries")
    cy.get(".select2-selection").click()
    cy.get("#select2-country-results > :nth-child(11)").click()
    cy.get("#yearbox").select("1986")
    cy.get("select[ng-model='monthbox']").select("June")
    cy.get("#daybox").select("18")
    cy.get("#firstpassword").type(user.password)
    cy.get("#secondpassword").type(user.confirmPassword)

    cy.contains("#submitbtn", user.btnSubmit).click()
  })

})