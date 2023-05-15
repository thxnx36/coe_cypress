describe('NEWS_PAGE', () => {
    beforeEach(() => {
        cy.login()
        cy.get(':nth-child(9) > .text-sm > :nth-child(2) > .items-center > .flex > span').click()

    })
    it('news & activities',() => {
        cy.wait(1000)
        cy.get('#tableSearchInput').type("2022")
        cy.wait(1000)
        cy.get('#tableSearchInput').clear()
        cy.wait(1000)
        })
})
