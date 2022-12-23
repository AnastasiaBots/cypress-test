describe('Hamburger menu', () => {
  beforeEach(() => {
    cy.visit('/user/login')
    cy.get('#normal_login_email').type(Cypress.env('email'))
    cy.get('#normal_login_password').type(Cypress.env('password'))
    cy.get('[type="submit"]').click()

  })
  it('Profile', () => {
    //-------------------------
    cy.get('[class="ms-2 me-2"]').click()
    cy.get('[href="/profile/62a2a6e02e8282accb6f6b97"]').click()

    cy.location('pathname').should('include', '/profile/')
    cy.contains('Anastasiia Bots').should('be.visible')
  })
  it('Settings', () => {
    //-------------------------
    cy.get('[class="ms-2 me-2"]').click()
    cy.get('[href="/settings/62a2a6e02e8282accb6f6b97"]').click()
    cy.location('pathname').should('include', '/settings/')
  })
  it('Orders', () => {
    //-------------------------
    cy.get('[class="ms-2 me-2"]').click()
    cy.get('[href="/orders/62a2a6e02e8282accb6f6b97"]').click()
    cy.location('pathname').should('include', '/orders/')
  })
  it('Log out', () => {
    //-------------------------
    cy.get('[class="ms-2 me-2"]').click()
    cy.get('div:nth-child(1) div.ant-dropdown.ant-dropdown-placement-bottomLeft ul.ant-dropdown-menu.ant-dropdown-menu-root.ant-dropdown-menu-vertical.ant-dropdown-menu-light:nth-child(1) li.ant-dropdown-menu-item.ant-dropdown-menu-item-only-child:nth-child(6) > span.ant-dropdown-menu-title-content').click()
    cy.contains('Interactive learning').should('be.visible')
  })
})
