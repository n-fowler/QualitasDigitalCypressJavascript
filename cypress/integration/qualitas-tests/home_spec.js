import HomePage from "./PageObject/HomePage";
const homePage = new HomePage();

describe("Qualitas - Home - Load", function () {
  before(function () {
    homePage.navigate();
  });
  it("The Home Page Loads", function () {
    homePage.getLogoImage().should("have.class", "logo-image");
  });
});

describe("Qualitas - Home - Navigation", function () {
  before(function () {
    homePage.navigate();
  });
  it("The Home Navigation has the correct link texts", function () {
    homePage.getNavToggle().click();
    var expectedLinkTexts = [
      "Home",
      "About Us",
      "Pricing + Services",
      "FAQ",
      "News + Notes",
      "Testimonials",
      "Schedule Consultation",
      "Contact Us",
    ];

    homePage.getNavCollection().each(($el, index, $list) => {
      cy.wrap($el)
        .find("a")
        .find("span")
        .should("have.text", expectedLinkTexts[index]);
    });
  });
  it("The Home Navigation has the correct link urls", function () {
    var expectedPageUrls = [
      "https://www.qualitasdigital.com/",
      "https://www.qualitasdigital.com/about-us",
      "https://www.qualitasdigital.com/pricing-services",
      "https://www.qualitasdigital.com/faq",
      "https://www.qualitasdigital.com/news-notes-qualitas",
      "https://www.qualitasdigital.com/testimonials",
      "https://www.qualitasdigital.com/schedule-consultation",
      "https://www.qualitasdigital.com/contact-us",
    ];

    homePage.getNavCollection().each(($el, index, $list) => {
      cy.wrap($el)
        .find("a")
        .invoke("prop", "href")
        .then((actualValue) => {
          expect(actualValue).to.equal(expectedPageUrls[index]);
        });
    });
  });
});

describe("Qualitas - Home - Search", () => {
  beforeEach(function () {
    cy.fixture("HomePageTestData").then(function (testdata) {
      this.testdata = testdata;
    });
  });
  before(function () {
    homePage.navigate();
  });
  it("The Home Page Search Function Works", () => {
    homePage.getSearchButton().click();
    homePage
      .getSearchTextBox()
      .invoke("prop", "placeholder")
      .then((actualPlaceholder) => {
        expect(actualPlaceholder).to.equal("Search");
      });
    homePage.getSearchTextBox().type("abc{enter}");
    cy.url().should("eq", "https://www.qualitasdigital.com/search?q=abc");
    homePage
      .getSearchResultTextBox()
      .should("have.text", "Your search did not match any documents.");
  });
});

describe("Qualitas - Home - Content", () => {
  beforeEach(function () {
    cy.fixture("HomePageTestData").then(function (testdata) {
      this.testdata = testdata;
    });
  });
  before(function () {
    homePage.navigate();
  });
  it("The primary section title is: Putting the Quality in Software Quality Automation", function () {
    homePage
      .getPrimarySectionTitle()
      .should("have.text", this.testdata.primary_section_title);
  });
  it("The laptop with code image is present", function () {
    homePage
      .getPrimarySectionImage()
      .find("img")
      .invoke("attr", "src")
      .then((actualSrc) => {
        expect(actualSrc).to.include(this.testdata.primary_section_image_src);
      });
  });
  it("The primary section body text is present", function () {
    homePage
      .getPrimarySectionBodyText()
      .should("have.text", this.testdata.primary_section_body_text);
  });
  it("The primary section schedule button is present", function () {
    homePage
      .getPrimarySectionScheduleButton()
      .find("a")
      .invoke("prop", "href")
      .then((actualHref) => {
        expect(actualHref).to.equal(
          this.testdata.primary_section_schedule_button_link
        );
      });
  });
  it("The Our Services section is present", function () {
    homePage
      .getOurServicesSectionTitle()
      .should("have.text", this.testdata.our_services_section_title);
    homePage
      .getOurServicesSectionBodyText()
      .should("have.text", this.testdata.our_services_section_body_text);
    homePage
      .getOurServicesSectionLink()
      .invoke("prop", "href")
      .then((actualHref) => {
        expect(actualHref).to.equal(this.testdata.our_services_section_link);
      });
  });
  it("The Our Commitment to You section is present", function () {
    homePage
      .getOurCommitmentSectionTitle()
      .should("have.text", this.testdata.our_commitment_section_title);
    homePage
      .getOurCommitmentSectionBodyText()
      .should("have.text", this.testdata.our_commitment_section_body_text);
    homePage
      .getOurCommitmentSectionLink()
      .invoke("prop", "href")
      .then((actualHref) => {
        expect(actualHref).to.equal(this.testdata.our_commitment_section_link);
      });
  });
  it("The Monthly Articles section is present", function () {
    homePage
      .getMonthlyArticlesSectionTitle()
      .should("have.text", this.testdata.monthly_articles_Section_title);
    homePage
      .getMonthlyArticlesSectionBodyText()
      .should("have.text", this.testdata.monthly_articles_section_body_text);
    homePage
      .getMonthlyArticlesSectionLink()
      .invoke("prop", "href")
      .then((actualHref) => {
        expect(actualHref).to.equal(
          this.testdata.monthly_articles_section_link
        );
      });
  });
  it("The Our Firm section is present", function () {
    homePage
      .getSecondarySectionTitle()
      .should("have.text", this.testdata.secondary_section_title);
    homePage
      .getSecondarySectionImage()
      .find("img")
      .invoke("attr", "src")
      .then((actualSrc) => {
        expect(actualSrc).to.include(this.testdata.secondary_section_image_src);
      });
    homePage
      .getSecondarySectionBodyText()
      .should("have.text", this.testdata.secondary_section_body_text);
    homePage
      .getSecondarySectionAboutUsButton()
      .find("a")
      .invoke("prop", "href")
      .then((actualHref) => {
        expect(actualHref).to.equal(
          this.testdata.secondary_section_aboutus_button_link
        );
      });
  });
  it("The mid-page title is present", function () {
    homePage.getMidPageTitle().should("have.text", this.testdata.midpage_title);
  });
  it("The High Quality Service section is present", function () {
    homePage
      .getTertiarySectionTitle()
      .should("have.text", this.testdata.tertiary_section_title);
    homePage
      .getTertiarySectionImage()
      .find("img")
      .invoke("attr", "src")
      .then((actualSrc) => {
        expect(actualSrc).to.include(this.testdata.tertiary_section_image_src);
      });
    homePage
      .getTertiarySectionBodyText()
      .should("have.text", this.testdata.tertiary_section_body_text);
    homePage
      .getTertiarySectionClientTestimonialsButton()
      .find("a")
      .invoke("prop", "href")
      .then((actualHref) => {
        expect(actualHref).to.equal(
          this.testdata.tertiary_section_client_testimonials_button_link
        );
      });
  });
  it("The Footer section is present", function () {
    homePage.getFooterTitle().should("have.text", this.testdata.footer_title);
    homePage
      .getFooterScheduleButton()
      .find("a")
      .invoke("prop", "href")
      .then((actualHref) => {
        expect(actualHref).to.equal(this.testdata.footer_schedule_button_link);
      });
  });
  it("The Footer link texts are present", function () {
    var expectedLinkTexts = ["Our Commitment", "Terms + Conditions"];
    homePage.getFooterLinksCollection().each(($el, index, $list) => {
      cy.wrap($el)
        .find("a")
        .find("span")
        .should("have.text", expectedLinkTexts[index]);
    });
  });
  it("The Footer link urls are present", function () {
    var expectedPageUrls = [
      "https://www.qualitasdigital.com/our-commitment",
      "https://www.qualitasdigital.com/terms-conditions",
    ];

    homePage.getFooterLinksCollection().each(($el, index, $list) => {
      cy.wrap($el)
        .find("a")
        .invoke("prop", "href")
        .then((actualValue) => {
          expect(actualValue).to.equal(expectedPageUrls[index]);
        });
    });
  });
});
