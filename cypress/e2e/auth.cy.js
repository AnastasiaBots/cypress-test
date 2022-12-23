

describe('Authentication', () => {
  beforeEach(() => {
    cy.visit('/user/login')
  })

  it('Log in with valid credentials', () => {
    cy.get('#normal_login_email').type(Cypress.env('email'))
    cy.get('#normal_login_password').type(Cypress.env('password'))
    cy.get('[type="submit"]').click()

    cy.location('pathname').should('include', 'profile')
    cy.get('.ant-avatar-square').should('be.visible')
  })
  it('Log in with incorrect credentials', () => {
    cy.get('#normal_login_email').type(Cypress.env('email'))
    cy.get('#normal_login_password').type('pass')

    cy.get('[type="submit"]').click()

    cy.location('pathname').should('include', '/user/login')
    cy.get('.ant-notification-notice-message')
      .should('be.visible')
      .should('have.text', 'Auth failed')
  })

  it('Log in username required', () => {
    cy.get('#normal_login_password').type('1200Rive').clear()

    cy.location('pathname').should('include', '/user/login')
    cy.get('[role="alert"]').should('be.visible').should('have.text', 'Required')
  })

  it('Log in password required', () => {
    cy.get('#normal_login_password').type('1200Rive').clear()

    cy.location('pathname').should('include', '/user/login')
    cy.get('[role="alert"]').should('be.visible').should('have.text', 'Required')
  })

  it.only('Log in email is not a valid email error', () => {
    cy.get('#normal_login_email').type('an')


    cy.location('pathname').should('include', '/user/login')
    cy.get('[role="alert"]')
      .should('be.visible')
      .should('have.text', '\'email\' is not a valid email')
  })
})


