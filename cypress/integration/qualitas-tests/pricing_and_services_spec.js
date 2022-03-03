describe('Qualitas - Pricing And Services - Load', () => {
    it('The Pricing And Services Page Loads', () => {
      cy.visit('https://www.qualitasdigital.com/pricing-services')
      cy.get('#header > div.logo-wrapper.flex-item > div')
        .should('have.class', 'logo-image')
    })
  })