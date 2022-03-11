import FaqPage from "./PageObject/FaqPage";
const faqPage = new FaqPage();

describe("Qualitas - Faq - Load", () => {
  before(function () {
    faqPage.navigate();
  });
  it("The Faq Page Loads", () => {
    faqPage.getLogoImage().should("have.class", "logo-image");
  });
});

describe("Qualitas - Faq - Content", () => {
  beforeEach(function () {
    cy.fixture("FaqPageTestData").then(function (testdata) {
      this.testdata = testdata;
    });
  });
  before(function () {
    faqPage.navigate();
  });
  it("The page title is: Frequently Asked Questions", function () {
    faqPage.getHeaderContent().should("have.text", this.testdata.faq_title);
  });
  it("The sidebar title is: You've got questions, we've got answers", function () {
    faqPage.getSidebarContent().should("have.text", this.testdata.faq_subtitle);
  });
  it("The sidebar contact us link is present", function () {
    faqPage
      .getContactUsLink()
      .invoke("prop", "href")
      .then((actualHref) => {
        expect(actualHref).to.equal(this.testdata.contactus_link);
      });
  });
  it("The left section titles are present with the correct text", function () {
    var faqPageExpectedLeftTitles = [
      this.testdata.title_one,
      this.testdata.title_two,
      this.testdata.title_three,
      this.testdata.title_four,
      this.testdata.title_five,
      this.testdata.title_six,
      this.testdata.title_seven,
    ];

    faqPage.getLeftTitles().each(($el, index) => {
      const text = $el.text();
      assert.equal(faqPageExpectedLeftTitles[index], text);
    });
  });
  it("The right section titles are present with the correct text", function () {
    var faqPageExpectedRightTitles = [
      this.testdata.title_eight,
      this.testdata.title_nine,
      this.testdata.title_ten,
      this.testdata.title_eleven,
      this.testdata.title_twelve,
      this.testdata.title_thirteen,
      this.testdata.title_fourteen,
      this.testdata.title_fifteen,
    ];

    faqPage.getRightTitles().each(($el, index) => {
      const text = $el.text();
      assert.equal(faqPageExpectedRightTitles[index], text);
    });
  });
  it("The left section bodies are present with the correct text", function () {
    var faqPageExpectedLeftBodies = [
      this.testdata.body_one,
      this.testdata.body_two,
      this.testdata.body_three,
      this.testdata.body_four,
      this.testdata.body_five,
      this.testdata.body_six,
      this.testdata.body_seven,
    ];

    faqPage.getLeftBodies().each(($el, index) => {
      const text = $el.text();
      assert.equal(faqPageExpectedLeftBodies[index], text);
    });
  });
  it("The right section bodies are present with the correct text", function () {
    var faqPageExpectedRightBodies = [
      this.testdata.body_eight,
      this.testdata.body_nine,
      this.testdata.body_ten,
      this.testdata.body_eleven,
      this.testdata.body_twelve,
      this.testdata.body_thirteen,
      this.testdata.body_fourteen,
      this.testdata.body_fifteen,
      "",
    ];

    faqPage.getRightBodies().each(($el, index) => {
      const text = $el.text();
      assert.equal(faqPageExpectedRightBodies[index], text);
    });
  });
});
