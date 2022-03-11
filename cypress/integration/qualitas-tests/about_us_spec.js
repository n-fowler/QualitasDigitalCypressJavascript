import AboutUsPage from "./PageObject/AboutUsPage";
const aboutUsPage = new AboutUsPage();

describe("Qualitas - About Us - Load", function () {
  before(function () {
    aboutUsPage.navigate();
  });
  it("The About Us Page Loads", function () {
    aboutUsPage.getLogoImage().should("have.class", "logo-image");
  });
});

describe("Qualitas - About Us - Content", function () {
  beforeEach(function () {
    cy.fixture("AboutUsPageTestData").then(function (testdata) {
      this.testdata = testdata;
    });
  });
  before(function() {
    aboutUsPage.navigate();
  })
  it("The page title is: Let Us Build Something Together", function () {
    aboutUsPage
      .getHeaderTitle()
      .should("have.text", this.testdata.header_title);
  });
  it("The sidebar title is: A word from our Founder", function () {
    aboutUsPage.getTitle().should("have.text", this.testdata.aboutus_title);
  });
  it("The remote work page image is present", function () {
    aboutUsPage
      .getAboutUsImage()
      .find("img")
      .invoke("attr", "src")
      .then((actualSrc) => {
        expect(actualSrc).to.include(this.testdata.aboutus_image_src);
      });
  });
  it("The sidebar body text is present", function () {
    aboutUsPage
      .getBodyText()
      .should("have.text", this.testdata.aboutus_body_text);
  });
  it("The sidebar our services link is present", function () {
    aboutUsPage
      .getOurServicesLink()
      .invoke("prop", "href")
      .then((actualHref) => {
        expect(actualHref).to.equal(this.testdata.our_services_link);
      });
  });
  it("The sidebar schedule a free consultation link is present", function () {
    aboutUsPage
      .getScheduleConsultationLink()
      .invoke("prop", "href")
      .then((actualHref) => {
        expect(actualHref).to.equal(this.testdata.schedule_consultation_link);
      });
  });
});
