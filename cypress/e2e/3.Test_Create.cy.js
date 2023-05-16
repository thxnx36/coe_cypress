describe('CREATE', () => {
    beforeEach(() => {
        cy.login()
        cy.GoToNewsPage()    })

    it('Create data', () => {

        cy.get('.filament-button').click()
        cy.wait(1000)
        // select the file input element
        const fileInput = cy.get('input[type="file"]')
        // use cypress-file-upload library to upload a file
        const filePath = 'pic.jpg'
        fileInput.attachFile(filePath)  
        // assert that the file has been uploaded successfully
        cy.wait(5000)// waiting for upload picture to complete
        cy.get('[id="data.title"]').type('Test')
        cy.get('[id="data.content"]').type('Test create data content')
        cy.get('.filament-page-actions > .text-white').click()
        cy.wait(1000)
    })
    it('Check HomePage', () => {
        cy.visit('https://coe-demo.ntpscrt.com/home')
        cy.get('.mb-6 > .max-w-sm > :nth-child(1)').scrollIntoView({ duration: 2000 })
        cy.wait(1000)
    })
})