import NewsAndNotesPage from "./PageObject/NewsAndNotesPage"

  describe('Qualitas - News And Notes - Load', () => {
    it('The News And Notes Page Loads', () => {
      const newsAndNotesPage = new NewsAndNotesPage();
      newsAndNotesPage.navigate();
      newsAndNotesPage.getLogoImage()
                      .should('have.class', 'logo-image')
    });
  });

  describe('Qualitas - News And Notes - Content', () => {
    it('The News And Notes Page Loads', () => {
      const newsAndNotesPage = new NewsAndNotesPage();
      newsAndNotesPage.navigate();
      //There should be at least one article
      newsAndNotesPage.getEntries()
                      .should('not.have.length', 0)

      //It should have a date
      newsAndNotesPage.getEntries()
                      .eq(0)
                      .find('[class="date-wrapper"]')
                      .should('be.visible')

      //It should have a clickable title
      var entryLink = newsAndNotesPage.getFirstEntry();
      entryLink.should('be.visible')
      entryLink.invoke('prop', 'href').then((actualHref) => {
        expect(actualHref).to.not.equal('')
      });
      newsAndNotesPage.getFirstEntryText()
                      .invoke('text')
                      .then((text) => {
                        expect(text).to.not.equal('')
                      });
      
      //It should have a clickable category
      var entryCategory = newsAndNotesPage.getFirstEntryCategory();
      entryCategory.should('be.visible')
      entryCategory.invoke('prop', 'href').then((actualHref) => {
        expect(actualHref).to.not.equal('')
      });
      newsAndNotesPage.getFirstEntryCategory()
                      .invoke('text')
                      .then((text) => {
                        expect(text).to.not.equal('')
                    });

      //It should have a summary body
      var entryExcerpt = newsAndNotesPage.getFirstEntryExcerpt();
      entryExcerpt.should('be.visible')
      newsAndNotesPage.getFirstEntryExcerpt()
                      .invoke('text')
                      .then((text) => {
                        expect(text).to.not.equal('')
                  });
    });
  });