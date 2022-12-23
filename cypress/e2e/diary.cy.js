

describe('Diary', () => {
    beforeEach(() => {
        cy.visit('/user/login')
        cy.get('#normal_login_email').type(Cypress.env('email'))
        cy.get('#normal_login_password').type(Cypress.env('password'))
        cy.get('[type="submit"]').click()
        cy.get('[data-qa="topmenu-Diary"]').click()
    })
    it.only('Create day report', () => {
    //     //-------------------------
    //     cy.get('[class="ant-btn ant-btn-primary"]').click()
    //     cy.get('[value="code_practice"]').check()
    //     cy.get('[placeholder="How was your day?"]').type('learning cypress all day long!')
    //     cy.get('[placeholder="hours"]').type('1')
    //    // cy.get('[id="morale"]').findByTitle('6').click()
    //     cy.get('[id="morale"]').click()
    //  //  cy.findByTitle('6').click()
    //    cy.get('div[title=6]').click()
    // //   cy.get('[type="submit"]').click()

        cy.findByText('Daily reports').should("exist")


    })
})
