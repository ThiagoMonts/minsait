//Métodos de ações na página
const el = require('./elements').ELEMENTS

class Login {
    logar(username, password) {
        cy.visit(el.url)
        cy.get(el.campoUsername).type(username)
        cy.get(el.campoPassword).type(password)
        cy.get(el.botaoLogin).click()
    }

    acessarURL() {
        cy.visit(el.url)
    }

    preencherUsername(username) {
        cy.get(el.campoUsername).type(username)
    }

    preencherPassword(password) {
        cy.get(el.campoPassword).type(password)
    }

    clicarNoBotaoLogin() {
        cy.get(el.botaoLogin).click()
    }
}

export default new Login()