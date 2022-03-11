import ScheduleConsultationPageLocators from "../Locators/ScheduleConsultationPageLocators";

class ScheduleConsultationPage {
  navigate() {
    cy.visit(ScheduleConsultationPageLocators.url());
  }

  getLogoImage() {
    return cy.get(ScheduleConsultationPageLocators.logo_image());
  }

  getHeaderContent() {
    return cy.xpath(ScheduleConsultationPageLocators.header_content());
  }

  getLeftContent() {
    return cy.xpath(ScheduleConsultationPageLocators.left_content());
  }

  getOurCommitmentLink() {
    return cy.xpath(ScheduleConsultationPageLocators.our_commitment_link());
  }

  getFaqLink() {
    return cy.xpath(ScheduleConsultationPageLocators.faq_link());
  }

  getTermsAndConditionsLink() {
    return cy.xpath(
      ScheduleConsultationPageLocators.terms_and_conditions_link()
    );
  }

  getScheduleConsultationButton() {
    return cy.get(
      ScheduleConsultationPageLocators.schedule_consultation_button()
    );
  }

  getScheduleConsultationButtonLink() {
    return this.getScheduleConsultationButton().find(
      ScheduleConsultationPageLocators.schedule_consultation_button_link()
    );
  }
}

export default ScheduleConsultationPage;
