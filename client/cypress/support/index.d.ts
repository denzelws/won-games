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
