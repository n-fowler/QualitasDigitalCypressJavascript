describe('Qualitas - Testimonials - Load', () => {
    it('The Testimonials Page Loads', () => {
      cy.visit('https://www.qualitasdigital.com/testimonials')
      cy.get('#header > div.logo-wrapper.flex-item > div')
        .should('have.class', 'logo-image')
    })
  })