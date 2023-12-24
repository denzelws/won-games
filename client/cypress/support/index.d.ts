// load type definitions from cypress module
/// <reference types="cypress" />

type ShowcaseAttributes = {
  name: string
  highlight?: boolean
}

type FieldsAttributes = {
  label: string
  name: string | number
}

type UserAttributes = {
  username: string
  email: string
  password: string
}

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to get element by data-cy
     * @example cy.getByDataCy('selector')
     */
    getByDataCy(selector: string): Chainable<Element>

    /**
     * Custom command get fields by label
     * @example cy.getFields(({ label: 'foo', name: 'foo' }))
     */
    getFields(fields: FieldsAttributes[]): Chainable<Element>

    /**
     * Custom command to sign up
     * @example cy.signUp(user)
     */
    signUp(user: UserAttributes): Chainable<Element>

    /**
     * Custom command to sign in
     * @example cy.signIn(user)
     */
    signIn(email?: string, password?: string): Chainable<Element>

    /**
     * Custom command to add game by index to cart
     * @example cy.addToCartByIndex(0)
     */
    addToCartByIndex(index: number): Chainable<Element>

    /**
     * Custom command to remove game by index from cart
     * @example cy.removeFromCartByIndex(0)
     */
    removeFromCartByIndex(index: number): Chainable<Element>

    /**
     * Custom command get fields by label
     * @example cy.shouldBeGreaterThan(0)
     */
    shouldBeGreaterThan(value: number): Chainable<Element>

    /**
     * Custom command get fields by label
     * @example cy.shouldBeLessThan(100)
     */
    shouldBeLessThan(value: number): Chainable<Element>

    /**
     * Custom command to check banner in page
     * @example cy.shouldRenderBanner()
     */
    shouldRenderBanner(): Chainable<Element>

    /**
     * Custom command to check banner in page
     * @example cy.shouldRenderShowcase()
     */
    shouldRenderShowcase(attrs: ShowcaseAttributes): Chainable<Element>
  }
}
