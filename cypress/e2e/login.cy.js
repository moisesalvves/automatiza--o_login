describe ('Testes de login - Lojinha', () => {
    it('Deve validar o login com sucesso', () => {
        cy.visit('http://165.227.93.41/lojinha-web/v2/')
        cy.get('label[for="usuario"]').should('be.visible').click()
        cy.get('#usuario').should('be.visible').click().type('admin')
        cy.get('label[for="senha"]').should('be.visible').click()
        cy.get('#senha').should('be.visible').click().type('admin')
        cy.get('#btn-entrar').should('be.visible').click()
        cy.get('#nav-mobile li a').eq(0).should('be.visible').should('have.text', 'Boas vindas, admin!')
    })

    it('Deve validar falha no login', () => {
        cy.visit('http://165.227.93.41/lojinha-web/v2/')
        cy.get('label[for="usuario"]').should('be.visible').click()
        cy.get('#usuario').should('be.visible').click().type('admin22')
        cy.get('label[for="senha"]').should('be.visible').click()
        cy.get('#senha').should('be.visible').click().type('admin22')
        cy.get('#btn-entrar').should('be.visible').click()
        cy.get('#toast-container').should('be.visible').should('have.text', 'Falha ao fazer o login')
    })
})