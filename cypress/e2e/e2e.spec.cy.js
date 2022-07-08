describe('Exploratory Test for Global SQA site', () => {
  beforeEach('', () => {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject')
  })
  it('Verify the title of the page', () => {
    cy.title().should('eq', 'XYZ Bank')
  })
  it('Verify the user is able to create a Customer Account', () => {
    cy.contains('Bank Manager Login').click()
    cy.contains('Add Customer').click()
      .get('[placeholder="First Name"]').type('Test 1')
      .get('[placeholder="Last Name"]').type('Test 1')
      .get('[placeholder="Post Code"]').type('Test 1')
      .get('[name="myForm"]').submit()
  })
})