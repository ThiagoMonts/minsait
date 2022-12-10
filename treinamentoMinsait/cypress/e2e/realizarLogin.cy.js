/// <reference types="cypress" />
import Login from "../support/Pages/Login"
import Produtos from "../support/Pages/Produtos"
describe("Realizar Login", () => {
    
    it("Realizar login com sucesso", () => {
        Login.logar("standard_user", "secret_sauce")
        Produtos.validarTitulo()

        //Substitui todos os métodos abaixo pelo método logar()
        //Login.acessarURL()
        //Login.preencherUsername("standard_user")
        //Login.preencherPassword("secret_sauce")
        //Login.clicarNoBotaoLogin()
    })

})