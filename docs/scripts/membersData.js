const membersData = [
    {
        id: "members_dep1", //tank maintenance
        image: "media/membersPage/TM.jpeg",
        departmentMembers: [
            "CHUI Wo Ronald",
            "LI Shing Hing Cathy",
            "KWOK Wing Chi Gigi",
            "OUYANG Yuesheng Kevin",
            "HUI Chi Long",
            "BHATT Trisha",
            "GIN Wing Sum Nicole",
            "LAW Hei Tung Hazel",
            "CHEN Pin Chen Richard",
            "HUI Chi Long",
            "POON Hin Lok Donald",
            "YIP Kai Yin Angus",
            "TUEN Yau Hei Mia",
            "PENG Hao Sayori",
            "WU Wing Kiu Hanna",
            "CHAN Hao Ian"
        ],
    },
    {
        id: "members_dep2", //public relations
        image: "media/membersPage/PR.jpeg",
        departmentMembers: [
            "CHAK Tin Long Louis",
            "CHAN Man Yung Jaslyn",
            "TANG Chuck Fung Tristan",
            "BHATT Riya",
            "CHENG Kwing Man Princeton",
            "DOU Leo",
            "HO Esmee",
            "HUI Chi Long",
            "POON Hin Lok Donald",
            "YIP Kai Yin Angus",
            "LU Ming Ze Halcyon",
            "LEUNG Chin Ying Arianna"
        ],
    },
    {
        id: "members_dep4", //art and design
        image: "media/membersPage/AD.jpeg",
        departmentMembers: [
            "NGO Chin Wun Eunice",
            "TUEN Yau Hei Mia",
            "PENG Hao Sayori",
            "WU Wing Kiu Hanna",
            "LEUNG Chin Ying Arianna",
            "NG Hin Yan Rebecca"
        ]
    },
    {
        id: "members_dep3", //account and finance
        image: "media/membersPage/AF.jpeg",
        departmentMembers: [
            "CHAN Hao Ian",
            "LU Ming Ze Halcyon"
        ]
    },
    {
        id: "members_dep5", //web
        image: "media/membersPage/WD.jpeg",
        departmentMembers: [
            "DENG Weilin William"
        ]
    }
];

//load the members groups and members names
document.addEventListener("DOMContentLoaded", function() {
    const getMembersFormattedHTML = function() {
        let htmlContent = "";
        for (let departmentID = 0; departmentID < membersData.length; departmentID++) {
            htmlContent += "<div class=\"department-card\">";
            htmlContent += "<img src=\"" + membersData[departmentID].image + "\" class=\"department-image\">";
            htmlContent += "<h2 class=\"departmentTitles\" id=\"" + membersData[departmentID].id + "\"></h2>";
            htmlContent += "<div class=\"members-grid default_text\">";
            for (let memberID = 0; memberID < (membersData[departmentID].departmentMembers).length; memberID++) {
                htmlContent += "<p class=\"departmentText\">" + String(membersData[departmentID].departmentMembers[memberID]) + "</p>";
            }
            htmlContent += "</div>";
            htmlContent += "</div>";
        }
        return htmlContent;
    }

    document.getElementById("departments_frame").innerHTML = getMembersFormattedHTML();
});