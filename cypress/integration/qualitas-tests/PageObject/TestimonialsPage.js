import TestimonialsPageLocators from "../Locators/TestimonialsPageLocators";

class TestimonialsPage {
    navigate() {
        cy.visit(TestimonialsPageLocators.url())
    }

    getLogoImage() {
        return cy.get(TestimonialsPageLocators.logo_image())
    }

    getHighlightedReviewContent() {
        return cy.xpath(TestimonialsPageLocators.highlighted_review_content())
    }
    
    getHighlightedReviewAuthor() {
        return cy.xpath(TestimonialsPageLocators.highlighted_review_author())
    }

    getMidPageTitle() {
        return cy.xpath(TestimonialsPageLocators.midpage_title())
    }

    getReviewOneContent() {
        return cy.xpath(TestimonialsPageLocators.review_one_content())
    }

    getReviewOneAuthor() {
        return cy.xpath(TestimonialsPageLocators.review_one_author())
    }

    getReviewTwoContent() {
        return cy.xpath(TestimonialsPageLocators.review_two_content())
    }

    getReviewTwoAuthor() {
        return cy.xpath(TestimonialsPageLocators.review_two_author())
    }

    getReviewThreeContent() {
        return cy.xpath(TestimonialsPageLocators.review_three_content())
    }

    getReviewThreeAuthor() {
        return cy.xpath(TestimonialsPageLocators.review_three_author())
    }

    getReviewFourContent() {
        return cy.xpath(TestimonialsPageLocators.review_four_content())
    }

    getReviewFourAuthor() {
        return cy.xpath(TestimonialsPageLocators.review_four_author())
    }

    getReviewFiveContent() {
        return cy.xpath(TestimonialsPageLocators.review_five_content())
    }

    getReviewFiveAuthor() {
        return cy.xpath(TestimonialsPageLocators.review_five_author())
    }
}

export default TestimonialsPage