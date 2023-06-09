describe('DELETE', () => {
    beforeEach(() => {
        cy.login()
        cy.GoToNewsPage()
    })

    it('Select and Delete data', () => {
        cy.wait(500)
        cy.get('#tableSearchInput').type("update")
        cy.wait(1000)
        cy.get('.filament-tables-cell')
        .first() // select the first table cell
        .click()
        cy.wait(2000)
        cy.get('.filament-header > .filament-page-actions > .filament-button').click()
        cy.get('button:contains("Confirm")').should('be.visible').click();
        cy.wait(1000)
    })

    it('Check HomePage', () => {
        cy.CheckHomePage()

    })
})
