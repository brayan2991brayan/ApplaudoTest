class Manager{
    navigate(){
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject')
    }

    enterFirstName(){
      cy.get('[placeholder="First Name"]')
          .clear()
          .type('Bra')

        return this
    }

    enterLastName(){
        cy.get('[placeholder="Last Name"]')
          .clear()
          .type('Yan')

        return this  
    }

    enterPostCode(){
        cy.get('[placeholder="Post Code"]')
          .clear()
          .type('20009')
        
          return this
    }

    submitForm(){
        cy.get('[name="myForm"]')
          .submit()
    }
}
export default Manager