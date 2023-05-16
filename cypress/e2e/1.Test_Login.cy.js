
describe('LOGIN', () => {
    beforeEach(() => {
        cy.visit('https://coe-demo.ntpscrt.com/admin/login')
    })

    it('requires email',() => {    
        cy.get('[type="submit"]').click()
        cy.wait(1000)

    })

    it('requires password',() => {    
        cy.get('[type="email"]').type('admin@admin.com')
        cy.get('[type="submit"]').click()
        cy.wait(1000)

    })

    it('Wrong email and password',() => {    
        cy.get('[type="email"]').type('user@user.com')
        cy.get('[type="password"]').type('secret{Enter}')

        cy.get('[type="submit"]').click()
        cy.wait(1000)

    })

    it('login Admin',() => {    
        cy.get('[type="email"]').type('admin@admin.com')
        cy.get('[type="password"]').type('secret{Enter}')
        cy.wait(1000)

    })
})
