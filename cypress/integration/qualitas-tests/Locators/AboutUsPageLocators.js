var AboutUsPageLocators = {
  url: function () {
    return "https://www.qualitasdigital.com/about-us";
  },
  logo_image: function () {
    return "#header > div.logo-wrapper.flex-item > div";
  },
  header_section: function () {
    return "block-8d07de855042f0a5360c";
  },
  header_title: function () {
    return '//*[@id="block-8d07de855042f0a5360c"]/div/h1';
  },
  title: function () {
    return '//*[@id="block-54dfc3255ea4a1352072"]/div/h2';
  },
  sidebar: function () {
    return '//*[@id="block-54dfc3255ea4a1352072"]/div/p';
  },
  body_text: function () {
    return '//*[@id="block-54dfc3255ea4a1352072"]/div/p[1]';
  },
  our_services_link: function () {
    return '//*[@id="block-54dfc3255ea4a1352072"]/div/p[2]/a[1]';
  },
  schedule_consultation_link: function () {
    return '//*[@id="block-54dfc3255ea4a1352072"]/div/p[2]/a[2]';
  },
  about_us_image_section: function () {
    return "block-5347679b4da120838be3";
  },
  image: function () {
    return 'div[id^="yui_3_17_2_1"][id$="68"]';
  },
};

export default AboutUsPageLocators;
