describe('Qualitas - Faq - Load', () => {
    it('The Faq Page Loads', () => {
      cy.visit('https://www.qualitasdigital.com/faq')
      cy.get('#header > div.logo-wrapper.flex-item > div')
        .should('have.class', 'logo-image')
    })
  })