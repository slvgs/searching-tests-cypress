/// <reference types ="Cypress"/>

const searchTerm = 'cypress.io'

describe('', () => {

    beforeEach(()=>{

        cy.intercept(
            'GET', 
        `**?q=${searchTerm}**`
        ).as('getSearchResults')// Essa requisição é o que o duckduckgo faz para o backend que vai retornar e demonstrar essas respostas. 

        cy.visit('https://duckduckgo.com/')


        cy.get('input[type="text"]')
            .as('searchField')
            .should('be.visible')

    })

    it('type and hits Enter', () => {

        cy.get('@searchField')
            .type(`${searchTerm}{enter}`)


        cy.wait('@getSearchResults')


    })

    it('types and click the madinifyng glass button ', () => {

        cy.get('@searchField')
        .type(searchTerm)

        cy.get('.searchbox_searchButton__F5Bwq')
        .should('be.visible')
        .click()

        cy.wait('@getSearchResults')

        
    })


    it('types and submits the form directly', () => {

        cy.get('@searchField')
            .type(searchTerm)
        cy.get('form').submit()

        cy.wait('@getSearchResults')
        
    })




})



