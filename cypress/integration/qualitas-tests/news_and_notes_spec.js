describe('Qualitas - News And Notes - Load', () => {
    it('The News And Notes Page Loads', () => {
      cy.visit('https://www.qualitasdigital.com/news-notes-qualitas')
      cy.get('#header > div.logo-wrapper.flex-item > div')
        .should('have.class', 'logo-image')
    })
  })