var NewsAndNotesPageLocators = {
    url: function() {
        return 'https://www.qualitasdigital.com/news-notes-qualitas'
    },
    logo_image: function() {
        return '#header > div.logo-wrapper.flex-item > div'
    },
    entries: function() {
        return '//*[@id="blogList"]/article'
    },
    entry_one: function() {
        return '//*[@id="blogList"]/article[2]/div[1]/div/div/h2/a'
    },
    entry_one_text: function() {
        return '//*[@id="blogList"]/article[2]/div[1]/div/div/h2/a/text()[3]'
    },
    entry_one_category: function() {
        return '//*[@id="blogList"]/article[2]/div[2]/div/div[2]/a[1]'
    },
    entry_one_excerpt: function() {
        return '//*[@id="blogList"]/article[2]/div[2]/div/div[3]/p[1]'
    }
}
export default NewsAndNotesPageLocators