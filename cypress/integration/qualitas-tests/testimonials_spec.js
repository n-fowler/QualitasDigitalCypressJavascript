import TestimonialsPage from "./PageObject/TestimonialsPage";
const testimonialsPage = new TestimonialsPage();

describe("Qualitas - Testimonials - Load", () => {
  before(function () {
    testimonialsPage.navigate();
  });
  it("The Testimonials Page Loads", () => {
    testimonialsPage.getLogoImage().should("have.class", "logo-image");
  });
});

describe("Qualitas - Testimonials - Content", () => {
  beforeEach(function () {
    cy.fixture("TestimonialsPageTestData").then(function (testdata) {
      this.testdata = testdata;
    });
  });
  before(function () {
    testimonialsPage.navigate();
  });
  it("There is a centered review in green #0d5", function () {
    testimonialsPage
      .getHighlightedReviewContent()
      .should("have.text", this.testdata.highlighted_review_content);
    testimonialsPage
      .getHighlightedReviewContent()
      .should("have.css", "color")
      .and("equal", "rgb(0, 221, 85)");
    testimonialsPage
      .getHighlightedReviewAuthor()
      .should("have.text", this.testdata.highlighted_review_author);
    testimonialsPage
      .getHighlightedReviewAuthor()
      .should("have.css", "color")
      .and("equal", "rgba(0, 221, 85, 0.6)");
  });
  it("There should be a mid page title: Others have had this to say...", function () {
    testimonialsPage
      .getMidPageTitle()
      .should("have.text", this.testdata.mid_page_title);
  });
  it("The mid page title isn't the same color as the highlighted review", function () {
    testimonialsPage
      .getMidPageTitle()
      .should("have.css", "color")
      .and("not.equal", "rgba(0, 221, 85, 1)");
  });
  it("the color of linked in review elements isn't the same as the highlighted review", function () {
    testimonialsPage
      .getReviewOneContent()
      .should("have.css", "color")
      .and("not.equal", "rgba(0, 221, 85, 1)");
    testimonialsPage
      .getReviewTwoContent()
      .should("have.css", "color")
      .and("not.equal", "rgba(0, 221, 85, 1)");
    testimonialsPage
      .getReviewThreeContent()
      .should("have.css", "color")
      .and("not.equal", "rgba(0, 221, 85, 1)");
    testimonialsPage
      .getReviewFourContent()
      .should("have.css", "color")
      .and("not.equal", "rgba(0, 221, 85, 1)");
    testimonialsPage
      .getReviewFiveContent()
      .should("have.css", "color")
      .and("not.equal", "rgba(0, 221, 85, 1)");
  });
  it("There should be five linked in based reviews that also aren't in green", function () {
    testimonialsPage
      .getReviewOneContent()
      .should("have.text", this.testdata.review_one_content);
    testimonialsPage
      .getReviewOneAuthor()
      .should("have.text", this.testdata.review_one_author);
    testimonialsPage
      .getReviewTwoContent()
      .should("have.text", this.testdata.review_two_content);
    testimonialsPage
      .getReviewTwoAuthor()
      .should("have.text", this.testdata.review_two_author);
    testimonialsPage
      .getReviewThreeContent()
      .should("have.text", this.testdata.review_three_content);
    testimonialsPage
      .getReviewThreeAuthor()
      .should("have.text", this.testdata.review_three_author);
    testimonialsPage
      .getReviewFourContent()
      .should("have.text", this.testdata.review_four_content);
    testimonialsPage
      .getReviewFourAuthor()
      .should("have.text", this.testdata.review_four_author);
    testimonialsPage
      .getReviewFiveContent()
      .should("have.text", this.testdata.review_five_content);
    testimonialsPage
      .getReviewFiveAuthor()
      .should("have.text", this.testdata.review_five_author);
  });
});
