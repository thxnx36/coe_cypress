describe('READ', () => {
    beforeEach(() => {
        cy.login()
        cy.get(':nth-child(9) > .text-sm > :nth-child(2) > .items-center > .flex > span').click()
    })

    it('Search and Selectdata', () => {
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
