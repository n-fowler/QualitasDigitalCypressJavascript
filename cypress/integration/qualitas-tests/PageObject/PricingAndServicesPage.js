import PricingAndServicesPageLocators from "../Locators/PricingAndServicesPageLocators";

class PricingAndServicesPage {
    navigate() {
        cy.visit(PricingAndServicesPageLocators.url())
    }

    getLogoImage() {
        return cy.get(PricingAndServicesPageLocators.logo_image())
    }

    getHeaderTitle() {
        return cy.xpath(PricingAndServicesPageLocators.header_title())
    }

    getSubTitle() {
        return cy.xpath(PricingAndServicesPageLocators.sub_title())
    }

    getOurCommitmentLink() {
        return cy.xpath(PricingAndServicesPageLocators.our_commitment_link())
    }

    getAdditionalTestCoverageTitle() {
        return cy.xpath(PricingAndServicesPageLocators.additional_test_coverage_title())
    }

    getAdditionalTestCoverageBodyText() {
        return cy.xpath(PricingAndServicesPageLocators.additional_test_coverage_body_text())
    }
    
    getFrameworkUpdatesTitle() {
        return cy.xpath(PricingAndServicesPageLocators.framework_updates_title())
    }
    
    getFrameworkUpdatesBodyText() {
        return cy.xpath(PricingAndServicesPageLocators.framework_updates_body_text())
    }

    getFrameworkUpdatesCustomTailoredBodyText() {
        return cy.xpath(PricingAndServicesPageLocators.framework_updates_custom_tailored_body_text())
    }

    getProcessAutomationTitle() {
        return cy.xpath(PricingAndServicesPageLocators.process_automation_title())
    }

    getProcessAutomationBodyText() {
        return cy.xpath(PricingAndServicesPageLocators.process_automation_body_text())
    }

    getDashboardsTitle() {
        return cy.xpath(PricingAndServicesPageLocators.dashboards_title())
    }

    getDashboardsOnPremiseBodyText() {
        return cy.xpath(PricingAndServicesPageLocators.dashboards_on_premise_body_text())
    }

    getDashboardsSaasBodyText() {
        return cy.xpath(PricingAndServicesPageLocators.dashboards_saas_body_text())
    }

    getDashboardsDisclaimerBodyText() {
        return cy.xpath(PricingAndServicesPageLocators.dashboards_disclaimer_body_text())
    }

    getTrainingTitle() {
        return cy.xpath(PricingAndServicesPageLocators.training_title())
    }

    getTrainingBodyText() {
        return cy.xpath(PricingAndServicesPageLocators.training_body_text())
    }

    getCoachingTitle() {
        return cy.xpath(PricingAndServicesPageLocators.coaching_title())
    }

    getCoachingBodyText() {
        return cy.xpath(PricingAndServicesPageLocators.coaching_body_text())
    }

    getRoadmapsTitle() {
        return cy.xpath(PricingAndServicesPageLocators.roadmaps_title())
    }

    getRoadmapsBodyText() {
        return cy.xpath(PricingAndServicesPageLocators.roadmaps_body_text())
    }

    getTrustedAdvisorTitle() {
        return cy.xpath(PricingAndServicesPageLocators.trusted_advisor_title())
    }

    getTrustedAdvisorBodyText() {
        return cy.xpath(PricingAndServicesPageLocators.trusted_advisor_body_text())
    }

    getTechnicalCofounderTitle() {
        return cy.xpath(PricingAndServicesPageLocators.technical_cofounder_title())
    }

    getTechnicalCofounderBodyText() {
        return cy.xpath(PricingAndServicesPageLocators.technical_cofounder_body_text())
    }
}

export default PricingAndServicesPage