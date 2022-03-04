import ContactUsPage from "./PageObject/ContactUsPage"

  describe('Qualitas - Contact Us - Load', () => {
    it('The Contact Us Page Loads', () => {
      const contactUsPage = new ContactUsPage();
      contactUsPage.navigate();
      contactUsPage.getLogoImage().should('have.class', 'logo-image')
    })
  })

  describe('Qualitas - Contact Us - Content', () => {
    before(function () {
      cy.fixture('ContactUsPageTestData').then(function (testdata) {
        this.testdata = testdata
    });
  });
  
  it('The Contact Us Page Content Is Present', function() {
    const contactUsPage = new ContactUsPage();
    contactUsPage.navigate();
    contactUsPage.getSidebarContent().should('have.text', this.testdata.left_content)
    contactUsPage.getOurCommitmentLink().invoke('prop', 'href').then((actualHref) => {
      expect(actualHref).to.equal(this.testdata.our_commitment_link)
    });
    contactUsPage.getFaqLink().invoke('prop', 'href').then((actualHref) => {
      expect(actualHref).to.equal(this.testdata.faq_link)
    });
    contactUsPage.getTermsAndConditionsLink().invoke('prop', 'href').then((actualHref) => {
      expect(actualHref).to.equal(this.testdata.terms_and_conditions_link)
    });
    assert.isNotNull(contactUsPage.getFirstNameField())
    assert.isNotNull(contactUsPage.getLastNameField())
    assert.isNotNull(contactUsPage.getEmailField())

    var expectedOptions = [
      "Additional Test Coverage",
      "Framework Updates",
      "Process Automation",
      "Dashboards",
      "Training",
      "Coaching",
      "Road maps",
      "Trusted Advisor",
      "Technical Co-Founder",
      "Other* (Include additional detail below)"]

    contactUsPage.getCheckboxSection().each(($el, index, $list) => {
      cy.wrap($el).invoke('prop', 'type').then((actualType) => {
        expect(actualType).to.equal('checkbox')
      });
      cy.wrap($el).invoke('prop', 'value').then((actualValue) => {
        expect(actualValue).to.equal(expectedOptions[index])
      });
    })

    assert.isNotNull(contactUsPage.getAdditionalMessageTextArea())
    assert.isNotNull(contactUsPage.getSubmitButton())
    contactUsPage.getSubmitButton().find('input').invoke('prop', 'type').then((actualType) => {
      expect(actualType).to.equal('submit')
    });
    contactUsPage.getSubmitButton().find('input').invoke('prop', 'value').then((actualValue) => {
      expect(actualValue).to.equal('Submit')
    });
  });
});