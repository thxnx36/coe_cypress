

it('Login admin', () => {
    
  cy.visit('https://coe-demo.ntpscrt.com/admin/login')

  cy.get('[type="email"]').type('admin@admin.com')
  cy.get('[type="password"]').type('secret{Enter}')
  
  cy.wait(1000)
})


it('news&activities page', () => {
    
  cy.visit('https://coe-demo.ntpscrt.com/admin/login')

  cy.get('[type="email"]').type('admin@admin.com')
  cy.get('[type="password"]').type('secret{Enter}')
  cy.get(':nth-child(9) > .text-sm > :nth-child(2) > .items-center > .flex > span').click()
  cy.wait(500)
  cy.get('#tableSearchInput').type("2022")
  cy.wait(1000)
  cy.get('#tableSearchInput').clear()

})

it('Create data', () => {

  cy.visit('https://coe-demo.ntpscrt.com/admin/login')

  cy.get('[type="email"]').type('admin@admin.com')
  cy.get('[type="password"]').type('secret{Enter}')
  cy.get(':nth-child(9) > .text-sm > :nth-child(2) > .items-center > .flex > span').click()
  cy.wait(1000)
  cy.get('.filament-button').click()
  cy.get('[id="data.title"]').type('Test1')
  cy.get('[id="data.content"]').type('Test create data content')
  cy.get('.filament-page-actions > .text-white').click()

})


