var ContactUsPageLocators = {
    url: function() {
        return 'https://www.qualitasdigital.com/contact-us'
    },
    logo_image: function() {
        return '#header > div.logo-wrapper.flex-item > div'
    },
    header_content: function() {
        return '//*[@id="block-66e658da5d8a61ea0d14"]/div/h1'
    },
    sidebar_content: function() {
        return '//*[@id="block-ef19513355911ef99e33"]/div/h2'
    },
    sidebar_links: function() {
        return '//*[@id="block-ef19513355911ef99e33"]/div/p/a'
    },
    our_commitment_link: function() {
        return '//*[@id="block-ef19513355911ef99e33"]/div/p/a[1]'
    },
    faq_link: function() {
        return '//*[@id="block-ef19513355911ef99e33"]/div/p/a[2]'
    },
    terms_and_conditions_link: function() {
        return '//*[@id="block-ef19513355911ef99e33"]/div/p/a[3]'
    },
    form_section: function() {
        return 'block-1d7f70b9528dd074da0a'
    },
    first_name_field: function() {
        return 'input[name="fname"]'
    },
    last_name_field: function() {
        return 'input[name="lname"]'
    },
    email_field: function() {
        return 'input[name="email"]'
    },
    checkbox_section: function() {
        return 'input[name^="checkbox-yui_3_17_2_1"][name$="22390-field"]'
    },
    additional_message_text_area: function() {
        return 'textarea[id^="textarea-yui_3_17_2_1"][id$="67663-field"]'
    },
    submit_button: function() {
        return '[class*="form-button-wrapper"]'
    }
};

export default ContactUsPageLocators