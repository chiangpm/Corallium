const LANG_EN = 0;
const LANG_TRADCH = 1;
const LANG_SIMPCH = 2;

const placeholderText = [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.",
    "Lorem Ipsum，也稱亂數假文或者啞元文本， 是印刷及排版領域所常用的虛擬文字。由於曾經一台匿名的打印機刻意打亂了一盒印刷字體從而造出一本字體樣品書，Lorem Ipsum從西元15世紀起就被作為此領域的標準文本使用。它不僅延續了五個世紀，還通過了電子排版的挑戰，其雛形卻依然保存至今。在1960年代，”Leatraset”公司發布了印刷着Lorem Ipsum段落的紙張，從而廣泛普及了它的使用。最近，計算機桌面出版軟件”Aldus PageMaker”也通過同樣的方式使Lorem Ipsum落入大眾的視野。",
    "Lorem Ipsum，也称乱数假文或者哑元文本， 是印刷及排版领域所常用的虚拟文字。由于曾经一台匿名的打印机刻意打乱了一盒印刷字体从而造出一本字体样品书，Lorem Ipsum从西元15世纪起就被作为此领域的标准文本使用。它不仅延续了五个世纪，还通过了电子排版的挑战，其雏形却依然保存至今。在1960年代，”Leatraset”公司发布了印刷着Lorem Ipsum段落的纸张，从而广泛普及了它的使用。最近，计算机桌面出版软件”Aldus PageMaker”也通过同样的方式使Lorem Ipsum落入大众的视野。"
];

textContents = {
    nav_mission: [
        "Mission",
        "使命",
        "使命"
    ],
    nav_members: [
        "Our Team",
        "團隊成員",
        "团队成员"
    ],
    nav_home: [
        "Home",
        "主頁",
        "主页"
    ],
    nav_recruitment: [
        "Join Us",
        "加入我們",
        "加入我们"
    ],
    nav_news: [
        "News",
        "最新動態",
        "最新动态"
    ],

    mission_mainContent1Heading: [
        "Mission statement",
        "使命宣言",
        "使命宣言"
    ],

    mission_mainContent1Text: placeholderText,

    mission_mainContent2Heading: [
        "Our approaches",
        "我們的策略",
        "我们的策略"
    ],

    mission_subheading1: [
        "Work A",
        "??",
        "??"
    ],

    mission_mainContent2Text1: placeholderText,

    mission_subheading2: [
        "Work B",
        "??",
        "??"
    ],

    mission_mainContent2Text2: placeholderText,

    mission_subheading3: [
        "Work C",
        "??",
        "??"
    ],

    mission_mainContent2Text3: placeholderText,
    
    home_mainContent1Heading: [
        "What is our goal?",
        "我們的目標",
        "我们的目标"
    ],
    home_mainContent1Text1: placeholderText,
    home_mainContent1Text2: placeholderText,
    home_mainContent2Heading: [
        "What do we do?",
        "我們的工作",
        "我们的工作",
    ],
    home_mainContent2Text1: placeholderText,
    home_mainContent2Text2: placeholderText,
    home_mainContent3Text1: placeholderText,
    home_mainContent3Text2: placeholderText,

    members_photoSubheading: [
        "Corallium Leadership Team",
        "Corallium 領導團隊",
        "Corallium 领导团队"
    ],
    members_lead1: [
        "Leader",
        "領導",
        "领导"
    ],
    members_lead2: [
        "Secretary",
        "秘書",
        "秘书"
    ],
    members_lead3: [
        "Head of Tank Maintenance Department",
        "設施維護部主管",
        "设施维护部主管"
    ],
    members_lead4: [
        "Head of Public Relations Department",
        "公共關係部主管",
        "公共关系部主管"
    ],
    members_lead5: [
        "Head of Accounting and Finance Department",
        "會計與財務部主管",
        "会计与财务部主管"
    ],
    members_lead6: [
        "Head of Art and Design Department",
        "藝術與設計部主管",
        "艺术与设计部主管"
    ],
    members_lead7: [
        "Head of Web Development Department",
        "網絡與技術部主管",
        "网络与技术部主管"
    ],
    members_lead8: [
        "Head of Human Resource Department",
        "人力資源部主管",
        "人力资源部主管"
    ],
    members_membersHeading: [
        "Corallium Team Members",
        "Corallium 成員",
        "Corallium 成员"
    ],
    members_dep1: [
        "Tank Maintenance Department",
        "設施維護部",
        "设施维护部"
    ],
    members_dep2: [
        "Public Relations Department",
        "公共關係部",
        "公共关系部"
    ],
    members_dep3: [
        "Accounting and Finance Department",
        "會計與財務部",
        "会计与财务部"
    ],
    members_dep4: [
        "Art and Design Department",
        "藝術與設計部",
        "艺术与设计部"
    ],
    members_dep5: [
        "Web Development Department",
        "網絡與技術部",
        "网络与技术部"
    ],

    recruitment_heading1: [
        "Why should you join us?",
        "為何加入我們",
        "为何加入我们"
    ],
    recruitment_text1: [
        "CAS !!! WOW",
        "??",
        "??"
    ],
    recruitment_heading2: [
        "Apply Now",
        "申請渠道",
        "申请渠道"
    ],
    recruitment_text2: [
        "Uhh idk someone add a qr code here",
        "??",
        "??"
    ],

    news_title: [
        "Corallium News",
        "Corallium 資訊",
        "Corallium 资讯"
    ]
}

let languageMode = LANG_SIMPCH;
function configclick_lang() {
    const langButton = document.getElementById("config_lang");
    languageMode = (languageMode + 1) % 3;

    for (const [key, value] of Object.entries(textContents)) {
        const textBox = document.getElementById(key);
        textBox.innerText = value[languageMode];
    }

    if (languageMode == LANG_EN) {
        langButton.innerText = "EN";
    } else if (languageMode == LANG_TRADCH) {
        langButton.innerText = "繁";
    } else if (languageMode == LANG_SIMPCH) {
        langButton.innerText = "简";
    }

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

    // const textObj = document.getElementById("news_temporaryNewsText");
    // if (languageMode == LANG_EN) {
    //     textObj.innerText = newsTextEnglish;
    // } else if (languageMode == LANG_TRADCH) {
    //     textObj.innerText = newsTextTradChinese;
    // } else if (languageMode == LANG_SIMPCH) {
    //     textObj.innerText = newsTextSimpChinese;
    // }
}

window.addEventListener("load", () => {
    configclick_lang()
});