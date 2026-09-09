describe ('Validação de produto', () =>{

    beforeEach('Login', () => {
        cy.visit('http://165.227.93.41/lojinha-web/v2/')
        cy.get('label[for="usuario"]').should('be.visible').click()
        cy.get('#usuario').should('be.visible').click().type('admin')
        cy.get('label[for="senha"]').should('be.visible').click()
        cy.get('#senha').should('be.visible').click().type('admin')
        cy.get('#btn-entrar').should('be.visible').click()
        cy.get('#nav-mobile li a').eq(0).should('be.visible').should('have.text', 'Boas vindas, admin!')
    })
    
    it('Deve validar adição de produto com sucesso', () => {
        cy.get('.row a').should('be.visible').should('have.text', 'Adicionar produto').click()
        cy.get('#produtovalor').should('be.visible').click().type('45')
        cy.get('#btn-salvar').should('be.visible').click()
        cy.get('#toast-container').should('be.visible').should('have.text', 'Produto adicionado com sucesso')
    })

    it('Deve validar falha no limite do produto', () => {
        cy.get('.row a').should('be.visible').should('have.text', 'Adicionar produto').click()
        cy.get('#produtovalor').should('be.visible').click().type('8000000')
        cy.get('#btn-salvar').should('be.visible').click()
        cy.get('#toast-container div').should('be.visible').should('have.text', 'O valor do produto deve estar entre R$ 0,01 e R$ 7.000,00')
    })

})

