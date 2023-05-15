import 'cypress-file-upload';

Cypress.Commands.add('login', () => {
    cy.visit('https://coe-demo.ntpscrt.com/admin/login')
    cy.get('[type="email"]').type('admin@admin.com')
    cy.get('[type="password"]').type('secret{Enter}')      
    cy.hash();
})