var ScheduleConsultationPageLocators = {
  url: function () {
    return "https://www.qualitasdigital.com/schedule-consultation";
  },
  logo_image: function () {
    return "#header > div.logo-wrapper.flex-item > div";
  },
  header_content: function () {
    return '//*[@id="block-540803d1406a17b6338b"]/div/h1';
  },
  left_content: function () {
    return '//*[@id="block-6bcc55f9ff3b7b21fdea"]/div/h2/em';
  },
  our_commitment_link: function () {
    return '//*[@id="block-6bcc55f9ff3b7b21fdea"]/div/p/a[1]';
  },
  faq_link: function () {
    return '//*[@id="block-6bcc55f9ff3b7b21fdea"]/div/p/a[2]';
  },
  terms_and_conditions_link: function () {
    return '//*[@id="block-6bcc55f9ff3b7b21fdea"]/div/p/a[3]';
  },
  schedule_consultation_button: function () {
    return 'div[id^="yui_3_17_2_1"][id$="77"]';
  },
  schedule_consultation_button_link: function () {
    return "a";
  },
};

export default ScheduleConsultationPageLocators;
