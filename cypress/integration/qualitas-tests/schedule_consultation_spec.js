import ScheduleConsultationPage from "./PageObject/ScheduleConsultationPage";
const scheduleConsultationPage = new ScheduleConsultationPage();

describe("Qualitas - Schedule Consultation - Load", () => {
  before(function () {
    scheduleConsultationPage.navigate();
  });
  it("The Schedule Consultation Page Loads", () => {
    scheduleConsultationPage.getLogoImage().should("have.class", "logo-image");
  });
});

describe("Qualitas - Schedule Consultation - Content", () => {
  beforeEach(function () {
    cy.fixture("ScheduleConsultationPageTestData").then(function (testdata) {
      this.testdata = testdata;
    });
  });
  before(function () {
    scheduleConsultationPage.navigate();
  });
  it("The page title is: Schedule A Consultation", function () {
    scheduleConsultationPage
      .getHeaderContent()
      .should("have.text", this.testdata.header_content);
  });
  it("The sidebar body text is present", function () {
    scheduleConsultationPage
      .getLeftContent()
      .should("have.text", this.testdata.left_content);
  });
  it("The Our Commitment link is present", function () {
    scheduleConsultationPage
      .getOurCommitmentLink()
      .invoke("prop", "href")
      .then((actualHref) => {
        expect(actualHref).to.equal(this.testdata.our_commitment_link);
      });
  });
  it("The Frequently Asked Questions link is present", function () {
    scheduleConsultationPage
      .getFaqLink()
      .invoke("prop", "href")
      .then((actualHref) => {
        expect(actualHref).to.equal(this.testdata.faq_link);
      });
  });
  it("The Terms and Conditions link is present", function () {
    scheduleConsultationPage
      .getTermsAndConditionsLink()
      .invoke("prop", "href")
      .then((actualHref) => {
        expect(actualHref).to.equal(this.testdata.terms_and_conditions_link);
      });
  });
  it("The Schedule Your Free Consultation Button is present", function () {
    scheduleConsultationPage
      .getScheduleConsultationButtonLink()
      .invoke("prop", "href")
      .then((actualHref) => {
        expect(actualHref).to.equal(
          this.testdata.schedule_consultation_button_link
        );
      });
  });
});
