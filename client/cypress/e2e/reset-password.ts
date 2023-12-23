/// <reference path="../support/index.d.ts" />

describe('Reset Password', () => {
  it('should show error if password does not match', () => {
    cy.visit('/reset-password?code=1234567')

    cy.findByPlaceholderText(/^password/i).type('123')
    cy.findByPlaceholderText(/confirm password/i).type('1234567')
    cy.findByRole('button', { name: /reset password/i}).click()

    cy.findByText(/confirm password does not match with password/i).should('exist')
  })

  it('should show code error if code its wrong', () => {
    cy.intercept('POST', '**/auth/reset-password', res => {
      res.reply({
        status: 400,
        body: {
          error: 'Bad Request',
          message: [
            {
              messages: [
                {
                  message: 'Incorrect code provided'
                }
              ]
            }
          ]
        }
      })
    })

    cy.visit('/reset-password?code=1234567')

    cy.findByPlaceholderText(/^password/i).type('123')
    cy.findByPlaceholderText(/confirm password/i).type('123')
    cy.findByRole('button', { name: /reset password/i}).click()

    cy.findByText(/Incorrect code provided/i).should('exist')
  })

  it('should fill the input and redirect to home page with user logged in', () => {
    cy.intercept('POST', '**/auth/callback/credentials*', {
      statusCode: 200,
      body: { user: {email: 'valid@mail.com'} }
    })

    cy.intercept('POST', '**/auth/reset-password', {
      statusCode: 200,
      body: { user: {email: 'valid@mail.com'} }
    })

    cy.intercept('GET', '**/auth/session', {
      statusCode: 200,
      body: { user: { name: 'cypress', email: 'valid@mail.com'} }
    })

    cy.visit('/reset-password?code=valid_code')

    cy.findByPlaceholderText(/^password/i).type('123')
    cy.findByPlaceholderText(/confirm password/i).type('123')
    cy.findByRole('button', { name: /reset password/i}).click()

    cy.url().should('eq', `${Cypress.config().baseUrl}/`)
    cy.findByText(/cypress/i).should('exist')
  })
})
