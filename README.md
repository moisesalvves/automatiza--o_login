# Automação de testes com Cypress

Projeto de automação de testes end-to-end (E2E) da aplicação Lojinha, desenvolvido com JavaScript e Cypress. Os testes verificam fluxos de login, cadastro e exclusão de produtos, além das mensagens de sucesso e erro exibidas na interface.

## Tecnologias

- JavaScript
- Cypress
- Node.js e npm

## Cenários de teste

- Login com credenciais válidas.
- Tentativa de login com credenciais inválidas.
- Adição de produto com valor válido.
- Tentativa de adição de produto com valor acima do limite permitido.
- Exclusão de produto.

## Como executar

Com Git, Node.js e npm instalados, clone o repositório e instale as dependências:

```bash
git clone https://github.com/moisesalvves/automatiza--o_login.git
cd automatiza--o_login
npm install
```

Para abrir a interface do Cypress:

```bash
npx cypress open
```

Selecione **E2E Testing**, escolha um navegador e abra o arquivo de teste desejado.

Para executar os testes pelo terminal:

```bash
npx cypress run
```

Para executar apenas os testes de login:

```bash
npx cypress run --spec "cypress/e2e/login.cy.js"
```

## Organização

- `cypress/e2e/login.cy.js`: testes de login.
- `cypress/e2e/addingProduct.cy.js`: testes de adição e validação de valor do produto.
- `cypress/e2e/deletProduct.cy.js`: teste de exclusão de produto.
- `cypress/support/`: arquivos de suporte do Cypress.
- `cypress.config.js`: configuração do Cypress e URL base da aplicação.

## Observações

Os testes dependem da disponibilidade da aplicação Lojinha e das credenciais utilizadas nos arquivos de teste. O cenário de exclusão exige que exista pelo menos um produto cadastrado, pois remove o primeiro item da lista.

A URL da aplicação também está escrita diretamente nos testes. Caso o endereço mude, atualize os arquivos de teste e o `cypress.config.js`.
