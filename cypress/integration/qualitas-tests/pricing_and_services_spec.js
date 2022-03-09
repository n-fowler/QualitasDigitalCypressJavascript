import PricingAndServicesPage from "./PageObject/PricingAndServicesPage"

  describe('Qualitas - Pricing And Services - Load', () => {
    it('The Pricing And Services Page Loads', () => {
      const pricingAndServicesPage = new PricingAndServicesPage();
      pricingAndServicesPage.navigate();
      pricingAndServicesPage.getLogoImage().should('have.class', 'logo-image')
    });
  });

  describe('Qualitas - Pricing And Services - Content', () => {
    before(function() {
      cy.fixture('PricingAndServicesPageTestData').then(function (testdata) {
        this.testdata = testdata
      });
    });

    it('The Pricing And Services Page Content Is Present', function() {
      const pricingAndServicesPage = new PricingAndServicesPage();
      pricingAndServicesPage.navigate();

      //Validate header
      pricingAndServicesPage.getHeaderTitle().should('have.text', this.testdata.pricing_and_services_title)

      //Validate left subsection
      pricingAndServicesPage.getSubTitle().should('have.text', this.testdata.pricing_and_services_subtitle)
      pricingAndServicesPage.getOurCommitmentLink().invoke('prop', 'href').then((actualHref) => {
        expect(actualHref).to.equal(this.testdata.our_commitment_link)
      });

      //Validate middle subsection
      pricingAndServicesPage.getAdditionalTestCoverageTitle().should('have.text', this.testdata.additional_test_coverage_title)
      pricingAndServicesPage.getAdditionalTestCoverageBodyText().should('have.text', this.testdata.additional_test_coverage_body_text)
      pricingAndServicesPage.getFrameworkUpdatesTitle().should('have.text', this.testdata.framework_updates_title)
      pricingAndServicesPage.getFrameworkUpdatesBodyText().should('have.text', this.testdata.framework_updates_upgrades_body_text)
      pricingAndServicesPage.getFrameworkUpdatesCustomTailoredBodyText().should('have.text', this.testdata.framework_updates_custom_tailored_body_text)
      pricingAndServicesPage.getProcessAutomationTitle().should('have.text', this.testdata.process_automation_title)
      pricingAndServicesPage.getProcessAutomationBodyText().should('have.text', this.testdata.process_automation_body_text)
      pricingAndServicesPage.getDashboardsTitle().should('have.text', this.testdata.dashboards_title)
      pricingAndServicesPage.getDashboardsOnPremiseBodyText().should('have.text', this.testdata.dashboards_on_premise_body_text)
      pricingAndServicesPage.getDashboardsSaasBodyText().should('have.text', this.testdata.dashboards_saas_body_text)
      pricingAndServicesPage.getDashboardsDisclaimerBodyText().should('have.text', this.testdata.dashboards_disclaimer_body_text)

      //Validate right subsection
      pricingAndServicesPage.getTrainingTitle().should('have.text', this.testdata.training_title)
      pricingAndServicesPage.getTrainingBodyText().should('have.text', this.testdata.training_body_text)
      pricingAndServicesPage.getCoachingTitle().should('have.text', this.testdata.coaching_title)
      pricingAndServicesPage.getCoachingBodyText().should('have.text', this.testdata.coaching_body_text)
      pricingAndServicesPage.getRoadmapsTitle().should('have.text', this.testdata.roadmaps_title)
      pricingAndServicesPage.getRoadmapsBodyText().should('have.text', this.testdata.roadmaps_body_text)
      pricingAndServicesPage.getTrustedAdvisorTitle().should('have.text', this.testdata.trusted_advisor_title)
      pricingAndServicesPage.getTrustedAdvisorBodyText().should('have.text', this.testdata.trusted_advisor_body_text)
      pricingAndServicesPage.getTechnicalCofounderTitle().should('have.text', this.testdata.technical_cofounder_title)
      pricingAndServicesPage.getTechnicalCofounderBodyText().should('have.text', this.testdata.technical_cofounder_body_text)
    });
  });