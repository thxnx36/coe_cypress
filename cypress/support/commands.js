import 'cypress-file-upload';

Cypress.Commands.add('login', () => {
    cy.visit('https://coe-demo.ntpscrt.com/admin/login')
    cy.get('[type="email"]').type('admin@admin.com')
    cy.get('[type="password"]').type('secret{Enter}')      
    cy.hash();
})

Cypress.Commands.add('GoToNewsPage', () => {
    cy.get(':nth-child(9) > .text-sm > :nth-child(2) > .items-center > .flex > span').click()
})

Cypress.Commands.add('CheckHomePage', () => {
    cy.visit('https://coe-demo.ntpscrt.com/home')
    cy.get('.mb-6 > .max-w-sm > :nth-child(1)').scrollIntoView({ duration: 2000 })
    cy.wait(1000)
})

