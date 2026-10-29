function generateNewsArticles() {
    //CALLED BY LANGUAGES.JS ONLY
    //news text, treat this separately,
    //newsText is defined in newsPage/newsData.js
    const newsFrame = document.getElementById("news_contentFrame"); 
    let newsFrameHtml = "";
    for (let entryId = 0; entryId < newsText.length; entryId++) {
        const entry = newsText[entryId];
        
        newsFrameHtml += "<div class=\"news_entryBox\">";
        newsFrameHtml += "<div class=\"news_entryDate\"><p class=\"news_dateText default_text\">";
        newsFrameHtml += entry.date;
        newsFrameHtml += "</p></div><h2 class=\"news_titleText title_text_2\">";
        if (languageMode == LANG_EN) {
            newsFrameHtml += entry.title.english;
        } else if (languageMode == LANG_TRADCH) {
            newsFrameHtml += entry.title.tradChinese;
        } else if (languageMode == LANG_SIMPCH) {
            newsFrameHtml += entry.title.simpChinese;
        }
        newsFrameHtml += "</h2><p class=\"news_mainText default_text\">";
        if (languageMode == LANG_EN) {
            newsFrameHtml += entry.text.english;
        } else if (languageMode == LANG_TRADCH) {
            newsFrameHtml += entry.text.tradChinese;
        } else if (languageMode == LANG_SIMPCH) {
            newsFrameHtml += entry.text.simpChinese;
        }
        newsFrameHtml += "</p></div>";
    }
    newsFrame.innerHTML = newsFrameHtml;
}