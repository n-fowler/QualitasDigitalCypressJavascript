import NewsAndNotesPageLocators from "../Locators/NewsAndNotesPageLocators";

class NewsAndNotesPage {
    navigate() {
        cy.visit(NewsAndNotesPageLocators.url())
    }

    getLogoImage() {
        return cy.get(NewsAndNotesPageLocators.logo_image())
    }

    getEntries() {
        return cy.xpath(NewsAndNotesPageLocators.entries())
    }

    getFirstEntry() {
        return cy.xpath(NewsAndNotesPageLocators.entry_one())
    }

    getFirstEntryText() {
        return cy.xpath(NewsAndNotesPageLocators.entry_one_text())
    }

    getFirstEntryCategory() {
        return cy.xpath(NewsAndNotesPageLocators.entry_one_category())
    }
    
    getFirstEntryExcerpt() {
        return cy.xpath(NewsAndNotesPageLocators.entry_one_excerpt())
    }
}
export default NewsAndNotesPage