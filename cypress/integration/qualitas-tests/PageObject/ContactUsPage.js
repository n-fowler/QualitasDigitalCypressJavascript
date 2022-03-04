import ContactUsPageLocators from "../Locators/ContactUsPageLocators"

class ContactUsPage {
    navigate() {
        cy.visit(ContactUsPageLocators.url())
    }

    getLogoImage() {
        return cy.get(ContactUsPageLocators.logo_image())
    }

    getHeaderContent() {
        return cy.xpath(ContactUsPageLocators.header_content())
    }

    getSidebarContent() {
        return cy.xpath(ContactUsPageLocators.sidebar_content())
    }

    getSidebarLinks() {
        return cy.xpath(ContactUsPageLocators.sidebar_links())
    }

    getOurCommitmentLink() {
        return cy.xpath(ContactUsPageLocators.our_commitment_link())
    }

    getFaqLink() {
        return cy.xpath(ContactUsPageLocators.faq_link())
    }

    getTermsAndConditionsLink() {
        return cy.xpath(ContactUsPageLocators.terms_and_conditions_link())
    }

    getFormSection() {
        return cy.get(ContactUsPageLocators.form_section())
    }

    getFirstNameField() {
        return cy.get(ContactUsPageLocators.first_name_field())
    }

    getLastNameField() {
        return cy.get(ContactUsPageLocators.last_name_field())
    }

    getEmailField() {
        return cy.get(ContactUsPageLocators.email_field())
    }

    getCheckboxSection() {
        return cy.get(ContactUsPageLocators.checkbox_section())
    }

    getAdditionalMessageTextArea() {
        return cy.get(ContactUsPageLocators.additional_message_text_area())
    }

    getSubmitButton() {
        return cy.get(ContactUsPageLocators.submit_button())
    }
}

export default ContactUsPage