describe('READ', () => {
    beforeEach(() => {
        cy.login()
        cy.GoToNewsPage()
    })
    it('data can be viewed by selecting', () => {
        cy.get(':nth-child(3) > .filament-icon-button').click();
        cy.wait(1000)

    })

    it('Search and Select data', () => {
        cy.wait(500)
        cy.get('#tableSearchInput').type("test")
        cy.wait(1000)
        cy.get('.filament-tables-cell')
        .first() // select the first table cell
        .click()
        cy.wait(2000)
    })
  
    it('Read data detail', () => {
        cy.get('.filament-tables-cell')
        .first() // select the first table cell
        .click()
        cy.wait(2000)
    })
})
