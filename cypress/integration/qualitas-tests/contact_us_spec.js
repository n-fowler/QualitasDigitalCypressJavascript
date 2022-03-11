import ContactUsPage from "./PageObject/ContactUsPage";
const contactUsPage = new ContactUsPage();

describe("Qualitas - Contact Us - Load", function () {
  before(function () {
    contactUsPage.navigate();
  });
  it("The Contact Us Page Loads", function () {
    contactUsPage.getLogoImage().should("have.class", "logo-image");
  });
});

describe("Qualitas - Contact Us - Content", () => {
  beforeEach(function () {
    cy.fixture("ContactUsPageTestData").then(function (testdata) {
      this.testdata = testdata;
    });
  });
  before(function () {
    contactUsPage.navigate();
  });
  it("The page title is: How Can We Help?", function () {
    contactUsPage
      .getHeaderContent()
      .should("have.text", this.testdata.header_content);
  });
  it("The sidebar body text is present", function () {
    contactUsPage
      .getSidebarContent()
      .should("have.text", this.testdata.left_content);
  });
  it("The sidebar our commitment link is present", function () {
    contactUsPage
      .getOurCommitmentLink()
      .invoke("prop", "href")
      .then((actualHref) => {
        expect(actualHref).to.equal(this.testdata.our_commitment_link);
      });
  });
  it("The sidebar faq link is present", function () {
    contactUsPage
      .getFaqLink()
      .invoke("prop", "href")
      .then((actualHref) => {
        expect(actualHref).to.equal(this.testdata.faq_link);
      });
  });
  it("The sidebar terms and conditions link is present", function () {
    contactUsPage
      .getTermsAndConditionsLink()
      .invoke("prop", "href")
      .then((actualHref) => {
        expect(actualHref).to.equal(this.testdata.terms_and_conditions_link);
      });
  });
  it("The contact us form fields are present", function () {
    assert.isNotNull(contactUsPage.getFirstNameField());
    assert.isNotNull(contactUsPage.getLastNameField());
    assert.isNotNull(contactUsPage.getEmailField());
  });
  it("The contact us checkboxes are present", function () {
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
      "Other* (Include additional detail below)",
    ];

    contactUsPage.getCheckboxSection().each(($el, index, $list) => {
      cy.wrap($el)
        .invoke("prop", "type")
        .then((actualType) => {
          expect(actualType).to.equal("checkbox");
        });
      cy.wrap($el)
        .invoke("prop", "value")
        .then((actualValue) => {
          expect(actualValue).to.equal(expectedOptions[index]);
        });
    });
  });
  it("The additional message text area is present", function () {
    assert.isNotNull(contactUsPage.getAdditionalMessageTextArea());
  });
  it("The submit button is present", function () {
    assert.isNotNull(contactUsPage.getSubmitButton());
    contactUsPage
      .getSubmitButton()
      .find("input")
      .invoke("prop", "type")
      .then((actualType) => {
        expect(actualType).to.equal("submit");
      });
    contactUsPage
      .getSubmitButton()
      .find("input")
      .invoke("prop", "value")
      .then((actualValue) => {
        expect(actualValue).to.equal("Submit");
      });
  });
});
