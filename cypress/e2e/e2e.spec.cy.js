describe('Exploratory Test for Global SQA site', () => {
  beforeEach(() => {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject')
  })
  //Test #1 Verifying the Assertion of the title on the site
  it('Verify the title of the page', () => {
    cy.title().should('eq', 'XYZ Bank')
  })
  //Test #2 Verifying the the user can create a Customer Account
  it('Verify the user is able to create a Customer Account', () => {
    cy.contains('Bank Manager Login').click()
    cy.contains('Add Customer').click()
      .get('[placeholder="First Name"]').type('Bra')
      .get('[placeholder="Last Name"]').type('Yan')
      .get('[placeholder="Post Code"]').type('20009')
      .get('[name="myForm"]').submit()
  })
  //Test #3 Verifying the the user can delete the first Customer of the list
  it('Verify the user is able to delete the first record created', () => {
    cy.wait(6000)
    cy.contains('Home').click()
    cy.contains('Bank Manager Login').click()
    cy.wait(6000)
    cy.contains('Customers').click()
      .get(':nth-child(1) > :nth-child(5) > button')  
  })
  //Test #4 Verifying the the user can delete the first Customer of the list
  it.only('Verify the user is able Open the account with a customer already created', () => {
      cy.contains('Home').click()
      cy.contains('Bank Manager Login').click()
      cy.contains('Open Account').click()
        .get('#userSelect').select('Harry Potter')
        .get('#currency').select('Dollar')
      cy.contains('Process').click()
    
      cy.on('window:alert', (text) => {
        expect(text).to.contains('Account created successfully with account Number :');
      })    
  })
})