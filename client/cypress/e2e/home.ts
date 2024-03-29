/// <reference path="../support/index.d.ts" />

describe('Cypress TS', () => {
  it('should visit localhost', () => {
    cy.visit('/')

    cy.shouldRenderBanner()
    cy.shouldRenderShowcase({ name: "New Games", hightlight: false })
    cy.shouldRenderShowcase({ name: "Most Popular Games", hightlight: true })
    cy.shouldRenderShowcase({ name: "Upcoming Games", hightlight: true })
    cy.shouldRenderShowcase({ name: "Free Games", hightlight: true })
  })
})
