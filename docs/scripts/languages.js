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

    mission_mainContent1Text: [
        "To promote the conservation and protection of Coral species in Hong Kong through coral cultivation and supporting legal channels of coral distribution.",
        "通過珊瑚培育及支持珊瑚分發的合法渠道，促進香港珊瑚物種的保育與保護。",
        "通过珊瑚培育及支持珊瑚分发的合法渠道，促进香港珊瑚物种的保育与保护。"
    ],

    mission_mainContent2Heading: [
        "Our approaches",
        "我們的策略",
        "我们的策略"
    ],

    // mission_subheading1: [
    //     "Fish Tank",
    //     "??",
    //     "??"
    // ],

    // mission_mainContent2Text1: [
    //     "In CCDD, our duties for running the fish tank include monitoring and controlling water conditions, like pH, temperature, nitrate, and salinity levels. We also feed our fish twice every day, do periodic water changes, and do cyanobacteria removal. In order to maintain the delicate saltwater ecosystem so that the coral can thrive, a dedicated group of members keep the fish tank's water quality in check to match natural seawater.",
    //     "?",
    //     "?"
    // ],

    // mission_subheading2: [
    //     "Coral Fragging",
    //     "??",
    //     "??"
    // ],

    // mission_mainContent2Text2: [
    //     "To help coral grow, we frag large colonies by cutting coral at their skeletal branches, and replanting the branches, so that each branch can healthily grow as a new smaller colony. Fragging prevents overgrowth, allowing each colony to have more space and resources to grow larger. Fragging also accelerates repopulation by stimulating the coral's natural regeneration response.",
    //     "?",
    //     "?"
    // ],

    // mission_subheading3: [
    //     "Outside School Activities",
    //     "??",
    //     "??"
    // ],

    // mission_mainContent2Text3: [
    //     "We collaborated with HKU students to help research seagrass growth in Hong Kong by planting and monitoring seagrass growth near Tai Tam Tuk resevoir. This research aims to increase the understanding of optimal growth conditions for seagrass, so that better systems can be set up to help preserve Hong Kong's unique ecosystem.",
    //     "",
    //     ""
    // ],
    
    home_mainContent1Heading: [
        "What is our goal?",
        "我們的目標是什麼？",
        "我们的目标是什么？"
    ],
    home_mainContent1Text1: [
        "First started in 2022, we are a student-led club focused on working with both local and international communities to actively advocate for coral conservation. We aim to distribute artificially grown coral to help offset threats to coral like wildlife harvesting and illegal trade.",
        "作為一個成立於2022年學生領導的社團，我們致力於對本地和國際社區倡導保護珊瑚的行動。我們的目標是投放人工培育珊瑚，以幫助抵消採集與非法貿易等對珊瑚的威脅。",
        "作为一个成立于2022年学生领导的社团，我们致力于对本地和国际社区倡导保护珊瑚的行动。我们的目标是投放人工培育珊瑚，以帮助抵消采集与非法贸易等对珊瑚的威胁。"
    ],
    home_mainContent1SecondHeading: [
        "Our background",
        "背景介紹",
        "背景介绍"
    ],
    home_mainContent1Text2: [
        "Since 2019 (under Fish Tank club), the CCDD fish tank has run nonstop to grow coral and sustain a miniature marine ecosystem, which also includes multiple species of starfish, sea urchins, clownfish, cardinalfish, abalones, sea snails, and shrimp.",
        "自2019年以來（隸屬於Fish Tank俱樂部），CCDD魚缸一直不間斷運行，用於培育珊瑚並維持一個微型海洋生態系統；該生態系統還包括多種海星、海膽、小丑魚、天竺鯛、鮑魚、海螺和蝦。",
        "自2019年以来（隶属于Fish Tank俱乐部），CCDD鱼缸一直不间断运行，用于培育珊瑚并维持一个微型海洋生态系统；该生态系统还包括多种海星、海胆、小丑鱼、天竺鲷、鲍鱼、海螺和虾。"
    ],
    home_mainContent2Heading: [
        "What do we do?",
        "我們的工作",
        "我们的工作",
    ],
    home_mainContent2Text1: [
        "In addition to running the fish and coral tanks on 5th and 7th floor, we also organise and operate events in and out of school. On major school events like open day, we run stalls to raise awareness of environmental threats on marine life. We also organised events for groups of students to go to Ocean Park marine ecology education programs.",
        "除了負責維護位5樓和7樓的魚缸及珊瑚缸外，我們還在校內外規劃並進行各類活動。學校重大活動（如開放日）期間，我們會設置展位，旨在提升大家對海洋生物所面臨環境威脅的認知。此外，我們曾組織學生前往海洋公園，參與當地的海洋生態教育計畫。",
        "除了负责维护位5楼和7楼的鱼缸及珊瑚缸外，我们还在校内外规划并进行各类活动。学校重大活动（如开放日）期间，我们会设置展位，旨在提升大家对海洋生物所面临环境威胁的认知。此外，我们曾组织学生前往海洋公园，参与当地的海洋生态教育计划。"
    ],

    home_mainContent2SecondHeading: [
        "Organisational structure",
        "組織結構",
        "组织结构"
    ],

    home_mainContent2Text2: [
        "Our club is split into 5 divisions: tank management, public relations, accounting and finance, art and design, and web development. Because of the delicate nature of the corals, which require rigorous supervision, we need a large number of members for continuous monitoring so that the corals are always in healthy condition.",
        "我們社團分為五個部門：魚缸與珊瑚缸管理、公共關係（公關）、財務與會計、藝術設計、網站開發。由於珊瑚的屬性特殊，需要嚴謹的照料。因此我們需要大量成員進行持續監測，以確保珊瑚處於健康狀態。",
        "我们社团分为五个部门：鱼缸与珊瑚缸管理、公共关系（公关）、财务与会计、艺术设计、网站开发。由于珊瑚的属性特殊，需要严谨的照料。因此我们需要大量成员进行持续监测，以确保珊瑚处于健康状态。"
    ],

    home_fishFactsHeading: [
        "Fish Facts",
        "魚類知識",
        "鱼类知识"
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

    recruitment_subpageButtonWhy: [
        "Why join us?",
        "為何加入我們？",
        "为何加入我们？"
    ],
    recruitment_casTitle: [
        "CAS Opportunities (IB Diploma)",
        "CAS 機會（IB文憑）",
        "CAS 机会（IB文凭）"
    ],
    recruitment_casTextIntro: [
        "Corallium is a student-led club which satisfies the requirements for all 3 branches of CAS, and can be a very strong CAS project!",
        "Corallium 是一個由學生主導的社團，涵蓋了 CAS 三大板塊的所有要求，完全可以成爲一個非常出色的 CAS 項目！",
        "Corallium 是一个由学生主导的社团，涵盖了 CAS 三大板块的所有要求，完全可以成为一个非常出色的 CAS 项目！"
    ],
    recruitment_casC: [
        "Creativity: Art and design are skills we consistently apply for marketing promotional events.",
        "創造力（Creativity）：藝術與設計是我們持續運用於行銷推廣活動中的技能。",
        "创造力（Creativity）：艺术与设计是我们持续运用于行销推广活动中的技能。"
    ],
    recruitment_casA: [
        "Activity: We organise many trips and events for students to learn about ecology around Hong Kong, outside the school campus.",
        "活動（Activity）：我們舉辦各類考察與活動，讓學生走出校園了解香港的生態環境。",
        "活动（Activity）：我们举办各类考察与活动，让学生走出校园了解香港的生态环境。"
    ],
    recruitment_casS: [
        "Service: We directly raise awareness of the global issue of climate change and marine pollution.",
        "服務（Service）：提升人們對全球氣候變遷及海洋污染議題的認知。",
        "服务（Service）：提升人们对全球气候变迁及海洋污染议题的认知。"
    ],

    recruitment_subpageButtonSignup: [
        "Apply Now",
        "申請渠道",
        "申请渠道"
    ],

    recruitment_signupFormLink: [
        "Link to signup form\n(Click me!)",
        "報名表鏈接\n（點我！）",
        "报名表链接\n（点我！）"
    ],

    recruitment_signupEmailText: [
        "If you have any questions about signing up, please contact Kaden Ling (Head of Corallium) via email below. Alternatively, please contact Natalie Wong or Kerry Ren:",
        "如果您對報名參與社團有任何疑問，請透過下方電子郵件聯絡 Kaden Ling（Corallium 負責人）。您也可以聯絡 Natalie Wong 或 Kerry Ren：",
        "?"
    ],

    recruitment_heading2:[
        "We need your help!",
        "我們需要您的幫助！",
        "我们需要您的帮助！"
    ],

    recruitment_weNeedYouText: [
        "Corallium is currently recruiting all Y10 and above students to join our team. Corallium is a fully student-operated non-profit initiative, meaning that every member has a say in the project. Our aim is to set up coral growth tanks in YCIS HK to spread awareness, as well as to educate people on the practical aspects of Marine Science. For our coral to meet the oceans of Hong Kong, we need your help.",
        "Corallium 現在正在招募十年級（Y10）及以上的學生加入我們的團隊。 Corallium 是一個完全由學生經營的非營利項目，這意味著每位成員都能在專案中發表意見、參與決策。我們的目標是在香港耀中（YCIS HK）內設立珊瑚培育缸，旨在提升大家的環保意識，並普及海洋科學類知識。為了讓我們的珊瑚最終能回歸香港的海域，我們需要你的幫助。",
        "Corallium 现在正在招募十年级（Y10）及以上的学生加入我们的团队。 Corallium 是一个完全由学生经营的非营利项目，这意味著每位成员都能在专案中发表意见、参与决策。我们的目标是在香港耀中（YCIS HK）内设立珊瑚培育缸，旨在提升大家的环保意识，并普及海洋科学类知识。为了让我们的珊瑚最终能回归香港的海域，我们需要你的帮助。"
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

    //normal text
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

    //update fish facts, language is automatic when updated
    homeclick_fishFactsScroll(0);
    missionclick_BoxScroll(0);

    // const textObj = document.getElementById("news_temporaryNewsText");
    // if (languageMode == LANG_EN) {
    //     textObj.innerText = newsTextEnglish;
    // } else if (languageMode == LANG_TRADCH) {
    //     textObj.innerText = newsTextTradChinese;
    // } else if (languageMode == LANG_SIMPCH) {
    //     textObj.innerText = newsTextSimpChinese;
    // }
}

window.addEventListener("DOMContentLoaded", () => {
    configclick_lang()
});