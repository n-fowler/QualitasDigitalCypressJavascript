import HomePageLocators from "../Locators/HomePageLocators";

class HomePage {
    navigate() {
        cy.visit(HomePageLocators.url())
    }

    getLogoImage() {
        return cy.get(HomePageLocators.logo_image())
    }

    getNavToggle() {
        return cy.get(HomePageLocators.nav_toggle())
    }

    getNavTray() {
        return cy.get(HomePageLocators.nav_tray())
    }

    getNavSection() {
        return cy.get(HomePageLocators.nav_section())
    }

    getNavCollection() {
        return this.getNavSection().find(HomePageLocators.nav_collection())
    }

    getNavBodyText() {
        return cy.get(HomePageLocators.nav_body_text())
    }

    getNavScheduleButton() {
        return cy.get(HomePageLocators.nav_schedule_button())
    }

    getSearchButton() {
        return cy.get(HomePageLocators.search_button())
    }

    getSearchTextBox () {
        return cy.get(HomePageLocators.search_text_box())
    }

    getSearchResultTextBox() {
        return cy.get(HomePageLocators.search_result_text())
    }

    getPrimarySectionTitle() {
        return cy.xpath(HomePageLocators.primary_section_title())
    }

    getPrimarySectionImage() {
        return cy.get(HomePageLocators.primary_section_image())
    }

    getPrimarySectionBodyText() {
        return cy.xpath(HomePageLocators.primary_section_body_text())
    }

    getPrimarySectionScheduleButton() {
        return cy.get(HomePageLocators.primary_section_schedule_button())
    }

    getOurServicesSectionTitle() {
        return cy.xpath(HomePageLocators.our_services_section_title())
    }

    getOurServicesSectionBodyText() {
        return cy.xpath(HomePageLocators.our_services_section_body_text())
    }

    getOurServicesSectionLink() {
        return cy.xpath(HomePageLocators.our_services_section_link())
    }

    getOurCommitmentSectionTitle() {
        return cy.xpath(HomePageLocators.our_commitment_section_title())
    }

    getOurCommitmentSectionBodyText() {
        return cy.xpath(HomePageLocators.our_commitment_section_body_text())
    }

    getOurCommitmentSectionLink() {
        return cy.xpath(HomePageLocators.our_commitment_section_link())
    }

    getMonthlyArticlesSectionTitle() {
        return cy.xpath(HomePageLocators.monthly_articles_section_title())
    }

    getMonthlyArticlesSectionBodyText() {
        return cy.xpath(HomePageLocators.monthly_articles_section_body_text())
    }

    getMonthlyArticlesSectionLink() {
        return cy.xpath(HomePageLocators.monthly_articles_section_link())
    }

    getSecondarySection() {
        return cy.get(HomePageLocators.secondary_section())
    }

    getSecondarySectionTitle() {
        return this.getSecondarySection().find(HomePageLocators.secondary_section_title())
    }
    
    getSecondarySectionImage() {
        return cy.get(HomePageLocators.secondary_section_image())
    }

    getSecondarySectionBodyText() {
        return this.getSecondarySection().find(HomePageLocators.secondary_section_body_text())
    }

    getSecondarySectionAboutUsButton() {
        return this.getSecondarySection().find(HomePageLocators.secondary_section_aboutus_button())
    }

    getMidPageTitle() {
        return cy.get(HomePageLocators.mid_page_title())
    }

    getTertiarySection() {
        return cy.get(HomePageLocators.tertiary_section())
    }

    getTertiarySectionTitle() {
        return this.getTertiarySection().find(HomePageLocators.tertiary_section_title())
    }

    getTertiarySectionImage() {
        return cy.get(HomePageLocators.tertiary_section_image())
    }

    getTertiarySectionBodyText() {
        return this.getTertiarySection().find(HomePageLocators.tertiary_section_body_text())
    }

    getTertiarySectionClientTestimonialsButton() {
        return this.getTertiarySection().find(HomePageLocators.tertiary_section_client_testimonials_button())
    }

    getFooterTitle() {
        return cy.get(HomePageLocators.footer_title())
    }

    getFooterScheduleButton() {
        return cy.get(HomePageLocators.footer_schedule_button())
    }

    getFooterNav() {
        return cy.get(HomePageLocators.footer_nav())
    }

    getFooterLinksSection() {
        return cy.get(HomePageLocators.footer_links_section())
    }

    getFooterLinksCollection() {
        return this.getFooterNav().find(HomePageLocators.footer_links_collection())
    }
}

export default HomePage