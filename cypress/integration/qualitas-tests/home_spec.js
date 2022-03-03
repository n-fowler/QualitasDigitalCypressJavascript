describe('Qualitas - Home - Load', () => {
    it('The Home Page Loads', () => {
      cy.visit('https://www.qualitasdigital.com/')
      cy.get('#header > div.logo-wrapper.flex-item > div')
        .should('have.class', 'logo-image')
    })
  })