/// <reference path="../support/index.d.ts" />

describe('Forgot Password', () => {
  it('should fill the input and receive a success message', () => {
    cy.intercept('POST', '**/auth/forgot-password', res => {
      res.reply({
        status: 200,
        body: { ok: true }
      })

      expect(res.body.email).to.eq('ci@wongames.com')
    })

    cy.visit('/forgot-password')
    cy.findByPlaceholderText(/email/i).type('ci@wongames.com')
    cy.findByRole('button', {name: /send email/i}).click()

    cy.findByText(/You just received an email!/i).should('exist')
  })

  it('should fill the input and receive error message', () => {
    cy.intercept('POST', '**/auth/forgot-password', res => {
      res.reply({
        status: 400,
        body: {
          error: 'Bad Request',
          message: [
            {
              messages: [
                {
                  message: 'This email does not exist!'
                }
              ]
            }
          ]
        }
      })

      expect(res.body.email).to.eq('ci@wongames.com')
    })

    cy.visit('/forgot-password')
    cy.findByPlaceholderText(/email/i).type('ci@wongames.com')
    cy.findByRole('button', {name: /send email/i}).click()

    cy.findByText(/This email does not exist!/i).should('exist')
  })
})
