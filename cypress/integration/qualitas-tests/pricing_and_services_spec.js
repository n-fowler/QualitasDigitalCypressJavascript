import PricingAndServicesPage from "./PageObject/PricingAndServicesPage";
const pricingAndServicesPage = new PricingAndServicesPage();

describe("Qualitas - Pricing And Services - Load", () => {
  before(function () {
    pricingAndServicesPage.navigate();
  });
  it("The Pricing And Services Page Loads", () => {
    pricingAndServicesPage.getLogoImage().should("have.class", "logo-image");
  });
});

describe("Qualitas - Pricing And Services - Content", () => {
  beforeEach(function () {
    cy.fixture("PricingAndServicesPageTestData").then(function (testdata) {
      this.testdata = testdata;
    });
  });
  before(function () {
    pricingAndServicesPage.navigate();
  });
  it("The page title is: Pricing + Services", function () {
    pricingAndServicesPage
      .getHeaderTitle()
      .should("have.text", this.testdata.pricing_and_services_title);
  });
  it("The left section title is: Software Quality Automation services starting at $100 an hour", function () {
    pricingAndServicesPage
      .getSubTitle()
      .should("have.text", this.testdata.pricing_and_services_subtitle);
  });
  it("The left section Our Commitment link is present", function () {
    pricingAndServicesPage
      .getOurCommitmentLink()
      .invoke("prop", "href")
      .then((actualHref) => {
        expect(actualHref).to.equal(this.testdata.our_commitment_link);
      });
  });
  it("The middle section content is present", function () {
    pricingAndServicesPage
      .getAdditionalTestCoverageTitle()
      .should("have.text", this.testdata.additional_test_coverage_title);
    pricingAndServicesPage
      .getAdditionalTestCoverageBodyText()
      .should("have.text", this.testdata.additional_test_coverage_body_text);
    pricingAndServicesPage
      .getFrameworkUpdatesTitle()
      .should("have.text", this.testdata.framework_updates_title);
    pricingAndServicesPage
      .getFrameworkUpdatesBodyText()
      .should("have.text", this.testdata.framework_updates_upgrades_body_text);
    pricingAndServicesPage
      .getFrameworkUpdatesCustomTailoredBodyText()
      .should(
        "have.text",
        this.testdata.framework_updates_custom_tailored_body_text
      );
    pricingAndServicesPage
      .getProcessAutomationTitle()
      .should("have.text", this.testdata.process_automation_title);
    pricingAndServicesPage
      .getProcessAutomationBodyText()
      .should("have.text", this.testdata.process_automation_body_text);
    pricingAndServicesPage
      .getDashboardsTitle()
      .should("have.text", this.testdata.dashboards_title);
    pricingAndServicesPage
      .getDashboardsOnPremiseBodyText()
      .should("have.text", this.testdata.dashboards_on_premise_body_text);
    pricingAndServicesPage
      .getDashboardsSaasBodyText()
      .should("have.text", this.testdata.dashboards_saas_body_text);
    pricingAndServicesPage
      .getDashboardsDisclaimerBodyText()
      .should("have.text", this.testdata.dashboards_disclaimer_body_text);
  });
  it("The right section content is present", function () {
    pricingAndServicesPage
      .getTrainingTitle()
      .should("have.text", this.testdata.training_title);
    pricingAndServicesPage
      .getTrainingBodyText()
      .should("have.text", this.testdata.training_body_text);
    pricingAndServicesPage
      .getCoachingTitle()
      .should("have.text", this.testdata.coaching_title);
    pricingAndServicesPage
      .getCoachingBodyText()
      .should("have.text", this.testdata.coaching_body_text);
    pricingAndServicesPage
      .getRoadmapsTitle()
      .should("have.text", this.testdata.roadmaps_title);
    pricingAndServicesPage
      .getRoadmapsBodyText()
      .should("have.text", this.testdata.roadmaps_body_text);
    pricingAndServicesPage
      .getTrustedAdvisorTitle()
      .should("have.text", this.testdata.trusted_advisor_title);
    pricingAndServicesPage
      .getTrustedAdvisorBodyText()
      .should("have.text", this.testdata.trusted_advisor_body_text);
    pricingAndServicesPage
      .getTechnicalCofounderTitle()
      .should("have.text", this.testdata.technical_cofounder_title);
    pricingAndServicesPage
      .getTechnicalCofounderBodyText()
      .should("have.text", this.testdata.technical_cofounder_body_text);
  });
});
