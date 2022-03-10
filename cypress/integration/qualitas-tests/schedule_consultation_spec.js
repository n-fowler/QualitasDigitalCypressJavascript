import ScheduleConsultationPage from "./PageObject/ScheduleConsultationPage"

  describe('Qualitas - Schedule Consultation - Load', () => {
    it('The Schedule Consultation Page Loads', () => {
      const scheduleConsultationPage = new ScheduleConsultationPage();
      scheduleConsultationPage.navigate();
      scheduleConsultationPage.getLogoImage().should('have.class', 'logo-image')
    });
  });

  describe('Qualitas - Schedule Consultation - Content', () => {
    before(function() {
      cy.fixture('ScheduleConsultationPageTestData').then(function (testdata) {
        this.testdata = testdata
      });
    });

    it('The Schedule Consultation Page Content Is Present', function() {
      const scheduleConsultationPage = new ScheduleConsultationPage();
      scheduleConsultationPage.navigate();

      //Validate Title
      scheduleConsultationPage.getHeaderContent().should('have.text', this.testdata.header_content)

      //Validate left section
      scheduleConsultationPage.getLeftContent().should('have.text', this.testdata.left_content)
      scheduleConsultationPage.getOurCommitmentLink().invoke('prop', 'href').then((actualHref) => {
        expect(actualHref).to.equal(this.testdata.our_commitment_link)
      });
      scheduleConsultationPage.getFaqLink().invoke('prop', 'href').then((actualHref) => {
        expect(actualHref).to.equal(this.testdata.faq_link)
      });
      scheduleConsultationPage.getTermsAndConditionsLink().invoke('prop', 'href').then((actualHref) => {
        expect(actualHref).to.equal(this.testdata.terms_and_conditions_link)
      });

      //Validate right section
      scheduleConsultationPage.getScheduleConsultationButtonLink().invoke('prop', 'href').then((actualHref) => {
        expect(actualHref).to.equal(this.testdata.schedule_consultation_button_link)
      });
    })
  });