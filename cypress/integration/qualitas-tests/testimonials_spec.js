import TestimonialsPage from "./PageObject/TestimonialsPage"

  describe('Qualitas - Testimonials - Load', () => {
    it('The Testimonials Page Loads', () => {
      const testimonialsPage = new TestimonialsPage();
      testimonialsPage.navigate();
      testimonialsPage.getLogoImage().should('have.class', 'logo-image')
    });
  });

  describe('Qualitas - Testimonials - Content', () => {
    before(function() {
      cy.fixture('TestimonialsPageTestData').then(function (testdata) {
        this.testdata = testdata
      });
    });

    it('The Testimonials Page Content Is Present', function() {
      const testimonialsPage = new TestimonialsPage();
      testimonialsPage.navigate();

      //There should be a centered review in green #0d5
      testimonialsPage.getHighlightedReviewContent().should('have.text', this.testdata.highlighted_review_content)
      testimonialsPage.getHighlightedReviewContent().should('have.css', 'color').and('equal', 'rgb(0, 221, 85)')
      testimonialsPage.getHighlightedReviewAuthor().should('have.text', this.testdata.highlighted_review_author)
      testimonialsPage.getHighlightedReviewAuthor().should('have.css', 'color').and('equal', 'rgba(0, 221, 85, 0.6)')
      
      //There should be a mid page title 'Others have had this to say...
      testimonialsPage.getMidPageTitle().should('have.text', this.testdata.mid_page_title)

      //The mid page title isn't the same color as the highlighted review
      testimonialsPage.getMidPageTitle().should('have.css', 'color').and('not.equal', 'rgba(0, 221, 85, 1)')

      //Validate that the color of linked in review elements isn't the same as the highlighted review
      testimonialsPage.getReviewOneContent().should('have.css', 'color').and('not.equal', 'rgba(0, 221, 85, 1)')
      testimonialsPage.getReviewTwoContent().should('have.css', 'color').and('not.equal', 'rgba(0, 221, 85, 1)')
      testimonialsPage.getReviewThreeContent().should('have.css', 'color').and('not.equal', 'rgba(0, 221, 85, 1)')
      testimonialsPage.getReviewFourContent().should('have.css', 'color').and('not.equal', 'rgba(0, 221, 85, 1)')
      testimonialsPage.getReviewFiveContent().should('have.css', 'color').and('not.equal', 'rgba(0, 221, 85, 1)')

      //There should be five linked in based reviews that also aren't in green
      testimonialsPage.getReviewOneContent().should('have.text', this.testdata.review_one_content)
      testimonialsPage.getReviewOneAuthor().should('have.text', this.testdata.review_one_author)
      testimonialsPage.getReviewTwoContent().should('have.text', this.testdata.review_two_content)
      testimonialsPage.getReviewTwoAuthor().should('have.text', this.testdata.review_two_author)
      testimonialsPage.getReviewThreeContent().should('have.text', this.testdata.review_three_content)
      testimonialsPage.getReviewThreeAuthor().should('have.text', this.testdata.review_three_author)
      testimonialsPage.getReviewFourContent().should('have.text', this.testdata.review_four_content)
      testimonialsPage.getReviewFourAuthor().should('have.text', this.testdata.review_four_author)
      testimonialsPage.getReviewFiveContent().should('have.text', this.testdata.review_five_content)
      testimonialsPage.getReviewFiveAuthor().should('have.text', this.testdata.review_five_author)
    });
  });