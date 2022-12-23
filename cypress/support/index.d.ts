


declare namespace Cypress{

    interface Chainable<Subject> {
        /**
         * Log into app
         * @example
         * cy.login('email@example.com', 'qwerty')
         */
        login(email: string, password: string): void
    }
}
