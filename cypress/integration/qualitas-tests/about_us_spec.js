import AboutUsPage from "./PageObject/AboutUsPage"

  describe('Qualitas - About Us - Load', () => {
    it('The About Us Page Loads', () => {
      const aboutUsPage = new AboutUsPage();
      aboutUsPage.navigate();
      aboutUsPage.getLogoImage().should('have.class', 'logo-image')
    });
  });

  describe('Qualitas - About Us - Content', () => {
    before(function () {
      cy.fixture('AboutUsPageTestData').then(function (testdata) {
          this.testdata = testdata
      });
    });

    it('The About Us Page Content Is Present', function() {
      const aboutUsPage = new AboutUsPage();
      aboutUsPage.navigate();
      aboutUsPage.getHeaderTitle().should('have.text', this.testdata.header_title)
      aboutUsPage.getTitle().should('have.text', this.testdata.aboutus_title)
      aboutUsPage.getAboutUsImage().find('img').invoke('attr', 'src').then((actualSrc) => {
        expect(actualSrc).to.include(this.testdata.aboutus_image_src)
      });
      aboutUsPage.getBodyText().should('have.text', this.testdata.aboutus_body_text)
      aboutUsPage.getOurServicesLink().invoke('prop', 'href').then((actualHref) => {
        expect(actualHref).to.equal(this.testdata.our_services_link)
      });
      aboutUsPage.getScheduleConsultationLink().invoke('prop', 'href').then((actualHref) => {
        expect(actualHref).to.equal(this.testdata.schedule_consultation_link)
      });
    });
  });