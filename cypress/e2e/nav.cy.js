describe('Navigation', () => {
  beforeEach(() => {
    cy.login(Cypress.env('email'), Cypress.env('password'))
  })

  it('Courses', () => {
    cy.get('[data-qa="topmenu-Courses"]').click()

    cy.location('pathname').should('include', '/course')
    cy.contains('Interactive Courses').should('be.visible')
  })
  it('Interview Questions', () => {
    cy.get('[data-qa="topmenu-Interview Questions"]').click()

    cy.location('pathname').should('include', '/flash')
    cy.contains('Interview practice cards').should('be.visible')
  })
  it('Diary', () => {
    //-------------------------
    cy.get('[data-qa="topmenu-Diary"]').click()

    cy.location('pathname').should('include', '/diary')
    cy.contains('Daily reports').should('be.visible')
  })
  it('Groups', () => {
    //-------------------------
    cy.get('[data-qa="topmenu-Groups"]').click()

    cy.location('pathname').should('include', '/group')
    cy.contains('Groups').should('be.visible')
  })
  it('Challenges', () => {
    //-------------------------
    cy.get('[data-qa="topmenu-Challenges"]').click()
    cy.location('pathname').should('include', '/challenge')
    cy.contains('Challenges').should('be.visible')
  })

})
