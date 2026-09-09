describe ('Exclusão de produtos na lojinha' , () => {
    
    before('Adicionar produto', () => {
        cy.visit('http://165.227.93.41/lojinha-web/v2/')
        cy.get('label[for="usuario"]').should('be.visible').click()
        cy.get('#usuario').should('be.visible').click().type('admin')
        cy.get('label[for="senha"]').should('be.visible').click()
        cy.get('#senha').should('be.visible').click().type('admin')
        cy.get('#btn-entrar').should('be.visible').click()
        cy.get('#nav-mobile li a').eq(0).should('be.visible').should('have.text', 'Boas vindas, admin!')
    })
    it('Deve excluir produto', () => {
        cy.get('.collection-item .secondary-content').eq(0).should('be.visible').click()
        cy.get('#toast-container div').should('be.visible').should('have.text', 'Produto removido com sucesso')
    })
})