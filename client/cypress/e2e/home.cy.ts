/// <reference path='../support/index.d.ts' />

describe('Home Page', () => {
  it('should render home sections', () => {
    cy.visit('/');

    cy.get('.slick-slider').first().within(() => {
      cy.findByRole('heading', { name: 'Cyberpunk 2077'} )
      cy.findByRole('link', { name: /buy now/i })
    })
  })
})
