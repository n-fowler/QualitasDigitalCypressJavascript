import NewsAndNotesPage from "./PageObject/NewsAndNotesPage";
const newsAndNotesPage = new NewsAndNotesPage();

describe("Qualitas - News And Notes - Load", function () {
  before(function () {
    newsAndNotesPage.navigate();
  });
  it("The News And Notes Page Loads", function () {
    newsAndNotesPage.getLogoImage().should("have.class", "logo-image");
  });
});

describe("Qualitas - News And Notes - Content", function () {
  before(function () {
    newsAndNotesPage.navigate();
  });
  it("There is at least one article", function () {
    newsAndNotesPage.getEntries().should("not.have.length", 0);
  });
  it("The article has a date", function () {
    newsAndNotesPage
      .getEntries()
      .eq(0)
      .find('[class="date-wrapper"]')
      .should("be.visible");
  });
  it("The article has a clickable title", function () {
    var entryLink = newsAndNotesPage.getFirstEntry();
    entryLink.should("be.visible");
    entryLink.invoke("prop", "href").then((actualHref) => {
      expect(actualHref).to.not.equal("");
    });
    newsAndNotesPage
      .getFirstEntryText()
      .invoke("text")
      .then((text) => {
        expect(text).to.not.equal("");
      });
  });
  it("The article has a clickable category", function () {
    var entryCategory = newsAndNotesPage.getFirstEntryCategory();
    entryCategory.should("be.visible");
    entryCategory.invoke("prop", "href").then((actualHref) => {
      expect(actualHref).to.not.equal("");
    });
    newsAndNotesPage
      .getFirstEntryCategory()
      .invoke("text")
      .then((text) => {
        expect(text).to.not.equal("");
      });
  });
  it("The article has a summary body", function () {
    var entryExcerpt = newsAndNotesPage.getFirstEntryExcerpt();
    entryExcerpt.should("be.visible");
    newsAndNotesPage
      .getFirstEntryExcerpt()
      .invoke("text")
      .then((text) => {
        expect(text).to.not.equal("");
      });
  });
});
