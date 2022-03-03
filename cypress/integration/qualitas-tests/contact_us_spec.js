describe('Qualitas - Contact Us - Load', () => {
    it('The Contact Us Page Loads', () => {
      cy.visit('https://www.qualitasdigital.com/contact-us')
      cy.get('#header > div.logo-wrapper.flex-item > div')
        .should('have.class', 'logo-image')
    })
  })