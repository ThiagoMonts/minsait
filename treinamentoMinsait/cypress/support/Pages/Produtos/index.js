//Métodos de ações na página
const el = require('./elements').ELEMENTS

class Produtos {
    validarTitulo() {
        cy.get(el.titulo).should("be.visible")
    }
}

   
export default new Produtos()