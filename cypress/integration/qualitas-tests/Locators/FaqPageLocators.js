var FaqPageLocators = {
  url: function () {
    return "https://www.qualitasdigital.com/faq";
  },
  logo_image: function () {
    return "#header > div.logo-wrapper.flex-item > div";
  },
  header_content: function () {
    return '//*[@id="block-0872d1f64aa73dc210a0"]/div/h1';
  },
  sidebar_content: function () {
    return '//*[@id="block-5a5c2d60498a7ac2f90c"]/div/h2';
  },
  contact_us_link: function () {
    return '//*[@id="block-5a5c2d60498a7ac2f90c"]/div/p/a';
  },
  center_section: function () {
    return "block-07ad9bb3be93b9c67b17";
  },
  left_titles: function () {
    return '//*[@id="block-07ad9bb3be93b9c67b17"]/div/h3';
  },
  left_bodies: function () {
    return '//*[@id="block-07ad9bb3be93b9c67b17"]/div/p';
  },
  right_titles: function () {
    return '//*[@id="block-156845d943225c44b8dd"]/div/h3';
  },
  right_bodies: function () {
    return '//*[@id="block-156845d943225c44b8dd"]/div/p';
  },
};

export default FaqPageLocators;
