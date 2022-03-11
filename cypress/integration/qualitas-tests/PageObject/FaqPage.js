import FaqPageLocators from "../Locators/FaqPageLocators";

class FaqPage {
  navigate() {
    cy.visit(FaqPageLocators.url());
  }

  getLogoImage() {
    return cy.get(FaqPageLocators.logo_image());
  }

  getHeaderContent() {
    return cy.xpath(FaqPageLocators.header_content());
  }

  getSidebarContent() {
    return cy.xpath(FaqPageLocators.sidebar_content());
  }

  getContactUsLink() {
    return cy.xpath(FaqPageLocators.contact_us_link());
  }

  getCenterSection() {
    return cy.get(FaqPageLocators.center_section());
  }

  getLeftTitles() {
    return cy.xpath(FaqPageLocators.left_titles());
  }

  getLeftBodies() {
    return cy.xpath(FaqPageLocators.left_bodies());
  }

  getRightTitles() {
    return cy.xpath(FaqPageLocators.right_titles());
  }

  getRightBodies() {
    return cy.xpath(FaqPageLocators.right_bodies());
  }
}

export default FaqPage;
