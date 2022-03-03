import AboutUsPageLocators from "../Locators/AboutUsPageLocators"

class AboutUsPage {
    navigate() {
        cy.visit(AboutUsPageLocators.url())
    }

    getLogoImage() {
        return cy.get(AboutUsPageLocators.logo_image())
    }

    getHeaderSection() {
        return cy.get(AboutUsPageLocators.header_section())
    }

    getHeaderTitle() {
        return cy.xpath(AboutUsPageLocators.header_title())
    }

    getTitle() {
        return cy.xpath(AboutUsPageLocators.title())
    }

    getSidebar() {
        return cy.xpath(AboutUsPageLocators.sidebar())
    }

    getBodyText() {
        return cy.xpath(AboutUsPageLocators.body_text())
    }

    getSidebarLinks() {
        return cy.xpath(AboutUsPageLocators.sidebar().get('a'))
    }

    getOurServicesLink() {
        return cy.xpath(AboutUsPageLocators.our_services_link())
    }

    getScheduleConsultationLink() {
        return cy.xpath(AboutUsPageLocators.schedule_consultation_link())
    }

    getAboutUsImageSection() {
        return cy.get(AboutUsPageLocators.about_us_image_section())
    }
    
    getAboutUsImage() {
        return cy.get(AboutUsPageLocators.image())
    }
}
export default AboutUsPage