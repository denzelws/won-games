/// <reference path="../support/index.d.ts" />

import { createUser } from "../support/generate"

describe('User', () => {
  it('should sign up', () => {
    cy.visit('/sign-up')
    const user = createUser()
    cy.signUp(user)

    cy.url().should('eq', `${Cypress.config().baseUrl}/`)
    cy.findByText(user.username).should('exist')
  })

  it('should sign in and sign out', () => {
    cy.visit('/sign-in')
    cy.signIn()

    cy.findByText(/wongamese2e/i).should('exist').click()
    cy.findByText(/sign out/i).click()

    cy.findByRole('link', {name: /sign in/i}).should('exist')
    cy.findByText(/wongamese2e/i).should('not.exist')
  })

  it('should sign the user and redirect to the page that it was previously defined', () => {
    cy.visit('/profile/me')

    cy.url().should('eq', `${Cypress.config().baseUrl}/sign-in?callbackUrl=/profile/me`)
    cy.signIn()

    cy.url().should('eq', `${Cypress.config().baseUrl}/profile/me`)
    cy.findByPlaceholderText(/username/i).should('have.value', 'wongamese2e')
    cy.findByPlaceholderText(/e-mail/i).should('have.value', 'e2e@wongames.com')
  })
})
