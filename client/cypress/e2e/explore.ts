/// <reference path="../support/index.d.ts" />

import { sortFields, priceFields, categoryFields, platformFields } from '../../src/utils/filter/fields'

describe('Explore Page', () => {
  before(() => {
    cy.visit('/games')
  })

  it('should render filter columns', () => {
    cy.findByRole('heading', {name: /sort by price/i}).should('exist')
    cy.findByRole('heading', {name: /^price/i}).should('exist')
    cy.findByRole('heading', {name: /categories/i}).should('exist')
    cy.findByRole('heading', {name: /platforms/i}).should('exist')

    cy.getFields(sortFields)
    cy.getFields(priceFields)
    cy.getFields(categoryFields)
    cy.getFields(platformFields)
  })

  it('should show 15 games and show more games when show more is clicked', () => {
    cy.getByDataCy('game-card').should('have.length', 15)
    cy.findByRole('button', {name: /show more/i}).click()
    cy.getByDataCy('game-card').should('have.length', 30)
  })
 })
