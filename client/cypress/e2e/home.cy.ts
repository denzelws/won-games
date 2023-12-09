/// <reference path='../support/index.d.ts' />

describe('Home Page', () => {
  it('should render home sections', () => {
    cy.visit('/');

    cy.get('.slick-slider').first().within(() => {
      cy.findByRole('heading', { name: 'Cyberpunk 2077'} )
      cy.findByRole('link', { name: /buy now/i })

      cy.get('.slick-dots > :nth-child(2) > button').click()
      cy.wait(500)

      cy.findByRole('heading', { name: 'Horizon Zero Dawn'} )
      cy.findByRole('link', { name: /buy now/i })

      cy.get('.slick-dots > :nth-child(3) > button').click()

      cy.findByRole('heading', { name: 'Huge promotion!'} )
      cy.findByRole('link', { name: /browse games/i })
    })
  })
})
