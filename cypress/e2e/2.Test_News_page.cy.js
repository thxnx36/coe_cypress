describe('NEWS_PAGE', () => {
    beforeEach(() => {
        cy.login()
        cy.GoToNewsPage()
    })
    it('news & activities',() => {
        cy.wait(1000)
        cy.get('#tableSearchInput').type("2022")
        cy.wait(1000)
        cy.get('#tableSearchInput').clear()
        cy.wait(1000)
        })
})
