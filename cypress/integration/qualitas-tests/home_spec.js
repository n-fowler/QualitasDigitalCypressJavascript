import HomePageLocators from "./Locators/HomePageLocators";
import HomePage from "./PageObject/HomePage"

  describe('Qualitas - Home - Load', () => {
    it('The Home Page Loads', () => {
      const homePage = new HomePage();
      homePage.navigate();
      homePage.getLogoImage()
              .should('have.class', 'logo-image');
    });
  });
  
  describe('Qualitas - Home - Navigation', () => {
    it('The Home Page Navigation Works', () => {
      const homePage = new HomePage();
      homePage.navigate();
      homePage.getNavToggle()
              .click()
      var expectedLinkTexts = [
        "Home",
        "About Us",
        "Pricing + Services",
        "FAQ",
        "News + Notes",
        "Testimonials",
        "Schedule Consultation",
        "Contact Us"]
      var expectedPageUrls = [
        "https://www.qualitasdigital.com/",
        "https://www.qualitasdigital.com/about-us",
        "https://www.qualitasdigital.com/pricing-services",
        "https://www.qualitasdigital.com/faq",
        "https://www.qualitasdigital.com/news-notes-qualitas",
        "https://www.qualitasdigital.com/testimonials",
        "https://www.qualitasdigital.com/schedule-consultation",
        "https://www.qualitasdigital.com/contact-us"]

      homePage.getNavSection()
              .find(HomePageLocators
              .nav_collection())
              .each(($el, index, $list) => {
                cy.wrap($el)
                  .find('a')
                  .find('span')
                  .should('have.text', expectedLinkTexts[index])
              })

      homePage.getNavSection()
              .find(HomePageLocators
              .nav_collection())
              .each(($el, index, $list) => {
                cy.wrap($el)
                  .find('a')
                  .invoke('prop', 'href')
                  .then((actualValue) => {
                    expect(actualValue).to.equal(expectedPageUrls[index])
                  })
              })
    });
  });

  describe('Qualitas - Home - Search', () => {
    it('The Home Page Search Function Works', () => {
      const homePage = new HomePage();
      homePage.navigate();
      homePage.getSearchButton()
              .click();
      homePage.getSearchTextBox()
              .invoke('prop', 'placeholder')
              .then((actualPlaceholder) => {
                expect(actualPlaceholder).to.equal("Search")
              });
      homePage.getSearchTextBox()
              .type('abc{enter}')
      cy.url().should('eq', 'https://www.qualitasdigital.com/search?q=abc')
      homePage.getSearchResultTextBox()
              .should('have.text', 'Your search did not match any documents.')
    });
  });

  describe('Qualitas - Home - Content', () => {
    before(function () {
      cy.fixture('HomePageTestData').then(function (testdata) {
          this.testdata = testdata
      });
    });

    it('The Home Page Content Is Present', function() {
      const homePage = new HomePage();
      homePage.navigate();
      
      //Validate primary section
      homePage.getPrimarySectionTitle()
              .should('have.text', this.testdata.primary_section_title)
      homePage.getPrimarySectionImage()
              .find('img')
              .invoke('attr', 'src')
              .then((actualSrc) => {
                expect(actualSrc).to.include(this.testdata.primary_section_image_src)
              });
      homePage.getPrimarySectionBodyText()
              .should('have.text', this.testdata.primary_section_body_text)
      homePage.getPrimarySectionScheduleButton()
              .find('a')
              .invoke('prop', 'href')
              .then((actualHref) => {
                expect(actualHref).to.equal(this.testdata.primary_section_schedule_button_link)
              });

      //Validate Our Services Section
      homePage.getOurServicesSectionTitle()
              .should('have.text', this.testdata.our_services_section_title)
      homePage.getOurServicesSectionBodyText()
              .should('have.text', this.testdata.our_services_section_body_text)
      homePage.getOurServicesSectionLink()
              .invoke('prop', 'href')
              .then((actualHref) => {
                expect(actualHref).to.equal(this.testdata.our_services_section_link)
              });

      //Validate Our Commitment Section
      homePage.getOurCommitmentSectionTitle()
              .should('have.text', this.testdata.our_commitment_section_title)
      homePage.getOurCommitmentSectionBodyText()
              .should('have.text', this.testdata.our_commitment_section_body_text)
      homePage.getOurCommitmentSectionLink()
              .invoke('prop', 'href')
              .then((actualHref) => {
                expect(actualHref).to.equal(this.testdata.our_commitment_section_link)
              });

      //Validate Monthly Articles Section
      homePage.getMonthlyArticlesSectionTitle()
              .should('have.text', this.testdata.monthly_articles_Section_title)
      homePage.getMonthlyArticlesSectionBodyText()
              .should('have.text', this.testdata.monthly_articles_section_body_text)
      homePage.getMonthlyArticlesSectionLink()
              .invoke('prop', 'href')
              .then((actualHref) => {
                expect(actualHref).to.equal(this.testdata.monthly_articles_section_link)
              });

      //Validate Secondary Section
      homePage.getSecondarySection()
              .find(HomePageLocators.secondary_section_title())
              .should('have.text', this.testdata.secondary_section_title)
      homePage.getSecondarySectionImage()
              .find('img')
              .invoke('attr', 'src')
              .then((actualSrc) => {
                expect(actualSrc).to.include(this.testdata.secondary_section_image_src)
              });
      homePage.getSecondarySection()
              .find(HomePageLocators.secondary_section_body_text())
              .should('have.text', this.testdata.secondary_section_body_text)
      homePage.getSecondarySection()
              .find(HomePageLocators.secondary_section_aboutus_button())
              .find('a')
              .invoke('prop', 'href')
              .then((actualHref) => {
                expect(actualHref).to.equal(this.testdata.secondary_section_aboutus_button_link)
              });

      //Validate Mid Page Title
      homePage.getMidPageTitle()
              .should('have.text', this.testdata.midpage_title)

      //Validate Tertiary Section
      homePage.getTertiarySection()
              .find(HomePageLocators.tertiary_section_title())
              .should('have.text', this.testdata.tertiary_section_title)
      homePage.getTertiarySectionImage()
              .find('img')
              .invoke('attr', 'src')
              .then((actualSrc) => {
                expect(actualSrc).to.include(this.testdata.tertiary_section_image_src)
              });
      homePage.getTertiarySection()
              .find(HomePageLocators.tertiary_section_body_text())
              .should('have.text', this.testdata.tertiary_section_body_text)
      homePage.getTertiarySection()
              .find(HomePageLocators.tertiary_section_client_testimonials_button())
              .find('a')
              .invoke('prop', 'href')
              .then((actualHref) => {
                expect(actualHref).to.equal(this.testdata.tertiary_section_client_testimonials_button_link)
              });

      //Validate Footer
      homePage.getFooterTitle()
              .should('have.text', this.testdata.footer_title)
      homePage.getFooterScheduleButton()
              .find('a')
              .invoke('prop', 'href')
              .then((actualHref) => {
                expect(actualHref).to.equal(this.testdata.footer_schedule_button_link)
              });

      //Verify Footer Expected Link Texts and Urls
      var expectedLinkTexts = [
        "Our Commitment",
        "Terms + Conditions"]
      var expectedPageUrls = [
        "https://www.qualitasdigital.com/our-commitment",
        "https://www.qualitasdigital.com/terms-conditions"]

      homePage.getFooterNav()
        .find(HomePageLocators
        .footer_links_collection())
        .each(($el, index, $list) => {
          cy.wrap($el)
            .find('a')
            .find('span')
            .should('have.text', expectedLinkTexts[index])
        })

      homePage.getFooterNav()
        .find(HomePageLocators
        .footer_links_collection())
        .each(($el, index, $list) => {
          cy.wrap($el)
            .find('a')
            .invoke('prop', 'href')
            .then((actualValue) => {
              expect(actualValue).to.equal(expectedPageUrls[index])
            })
        })
    });
  });