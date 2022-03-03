describe('Qualitas - Schedule Consultation - Load', () => {
    it('The Schedule Consultation Page Loads', () => {
      cy.visit('https://www.qualitasdigital.com/schedule-consultation')
      cy.get('#header > div.logo-wrapper.flex-item > div')
        .should('have.class', 'logo-image')
    })
  })