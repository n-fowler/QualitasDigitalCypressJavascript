describe('Qualitas - About Us - Load', () => {
    it('The About Us Page Loads', () => {
      cy.visit('https://www.qualitasdigital.com/about-us')
      cy.get('#header > div.logo-wrapper.flex-item > div')
        .should('have.class', 'logo-image')
    })
  })