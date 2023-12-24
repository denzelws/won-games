/// <reference path="../support/index.d.ts" />

describe('Cart', () => {
  it('should add and remove game to cart when click in the icon', () => {
    cy.visit('/')

    cy.addToCartByIndex(0)

    cy.findAllByLabelText(/cart items/i)
    .first()
    .should('have.length', 1)
    .click()

    cy.getByDataCy('cart-list').within(() => {
      cy.findByRole('heading', {name: /alone in the dark/i}).should('exist')
    })

    cy.findAllByLabelText(/cart items/i)
    .first()
    .click()

    cy.removeFromCartByIndex(0)

    cy.findAllByLabelText(/cart items/i).should('not.exist')
  })
})
