

it('Log in', () => {
    
  cy.visit('https://coe-demo.ntpscrt.com/admin/login')

  cy.get('[type="email"]').type('admin@admin.com')
  cy.get('[type="password"]').type('secret{Enter}')
  cy.get(':nth-child(9) > .text-sm > :nth-child(2) > .items-center > .flex > span').click()
})
