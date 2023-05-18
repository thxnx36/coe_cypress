describe('UPDATE', () => {
    beforeEach(() => {
        cy.login()
        cy.GoToNewsPage()    
    })

    it('Select and Edit data', () => {
        cy.wait(500)
        cy.get('#tableSearchInput').type("test")
        cy.wait(1000)
        cy.get('.filament-tables-cell')
        .first() // select the first table cell
        .click()
        cy.wait(2000)
        cy.get('[id="data.title"]').clear()
        cy.get('[id="data.title"]').type('Update')
        cy.get('[id="data.content"]').clear()
        cy.get('[id="data.content"]').type('Update data content')
        cy.get('.filament-form > .filament-page-actions > .text-white').click()
    })

   
    it('Check HomePage', () => {
        cy.CheckHomePage()

    })
})

