import FaqPage from "./PageObject/FaqPage"

  describe('Qualitas - Faq - Load', () => {
    it('The Faq Page Loads', () => {
      const faqPage = new FaqPage();
      faqPage.navigate();
      faqPage.getLogoImage().should('have.class', 'logo-image');
    });
  });

  describe('Qualitas - Faq - Content', () => {
    before(function () {
      cy.fixture('FaqPageTestData').then(function (testdata) {
        this.testdata = testdata
    });
  });

  it('The Faq Page Content Is Present', function() {
    const faqPage = new FaqPage();
    faqPage.navigate();
    faqPage.getHeaderContent().should('have.text', this.testdata.faq_title)
    faqPage.getSidebarContent().should('have.text', this.testdata.faq_subtitle)
    faqPage.getContactUsLink().invoke('prop', 'href').then((actualHref) => {
      expect(actualHref).to.equal(this.testdata.contactus_link)
    });
      var faqPageExpectedLeftTitles = [
        this.testdata.title_one,
        this.testdata.title_two,
        this.testdata.title_three,
        this.testdata.title_four,
        this.testdata.title_five,
        this.testdata.title_six,
        this.testdata.title_seven]

      var faqPageExpectedRightTitles = [
        this.testdata.title_eight,
        this.testdata.title_nine,
        this.testdata.title_ten,
        this.testdata.title_eleven,
        this.testdata.title_twelve,
        this.testdata.title_thirteen,
        this.testdata.title_fourteen,
        this.testdata.title_fifteen]

      var faqPageExpectedLeftBodies = [
        this.testdata.body_one,
        this.testdata.body_two,
        this.testdata.body_three,
        this.testdata.body_four,
        this.testdata.body_five,
        this.testdata.body_six,
        this.testdata.body_seven]

      var faqPageExpectedRightBodies = [
        this.testdata.body_eight,
        this.testdata.body_nine,
        this.testdata.body_ten,
        this.testdata.body_eleven,
        this.testdata.body_twelve,
        this.testdata.body_thirteen,
        this.testdata.body_fourteen,
        this.testdata.body_fifteen,
        '']

        faqPage.getLeftTitles().each(($el, index) => {
          const text = ($el).text()
          assert.equal(faqPageExpectedLeftTitles[index], text)
        })
        faqPage.getRightTitles().each(($el, index) => {
          const text = ($el).text()
          assert.equal(faqPageExpectedRightTitles[index], text)
        })
        faqPage.getLeftBodies().each(($el, index) => {
          const text = ($el).text()
          assert.equal(faqPageExpectedLeftBodies[index], text)
        })
        faqPage.getRightBodies().each(($el, index) => {
          const text = ($el).text()
          assert.equal(faqPageExpectedRightBodies[index], text)
        })
  })
});