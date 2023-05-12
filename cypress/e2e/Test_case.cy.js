

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
  cy.wait(1000)
  // select the file input element
const fileInput = cy.get('input[type="file"]')

// use cypress-file-upload library to upload a file
const filePath = 'pic.jpg'
fileInput.attachFile(filePath)

// assert that the file has been uploaded successfully
  cy.wait(5000)
  cy.get('[id="data.title"]').type('Test')
  cy.get('[id="data.content"]').type('Test create data content')
  cy.get('.filament-page-actions > .text-white').click()
  cy.wait(1000)

  ///check in home page
  cy.visit('https://coe-demo.ntpscrt.com/home')
  cy.get('.mb-6 > .max-w-sm > :nth-child(1)').scrollIntoView({ duration: 2000 })
  cy.wait(1000)

})

it('Read data', () => {

  cy.visit('https://coe-demo.ntpscrt.com/admin/login')

  cy.get('[type="email"]').type('admin@admin.com')
  cy.get('[type="password"]').type('secret{Enter}')
  cy.get(':nth-child(9) > .text-sm > :nth-child(2) > .items-center > .flex > span').click()
  cy.wait(1000)
  cy.get('#tableSearchInput').type("test")



})