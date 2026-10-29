const membersData = [
    {
        id: "members_dep1",
        image: "media/missionPage/Coral_maintenance.jpeg",
        departmentMembers: [
            "CHUI Wo Ronald",
            "LI Shing Hing Cathy",
            "KWOK Wing Chi Gigi",
            "OUYANG Yuesheng Kevin",
            "WANG Zuncheng Marco",
            "HUI Chi Long",
            "FONG Wai Yan Jade"
        ],
    },
    {
        id: "members_dep2",
        image: "media/recruitmentPage/Tank_training.jpeg",
        departmentMembers: [
            "CHAK Tin Long Louis",
            "HUI Yik Ling Simona",
            "CHAN Man Yung Jaslyn",
            "CHEN Chiu Tung Coco",
            "TANG Chuck Fung Tristan",
            "LEUNG Chin Ying Ariana",
            "HUI Chi Long"
        ],
    },
    {
        id: "members_dep3",
        image: "media/missionPage/Seagrass_temp.jpeg",
        departmentMembers: [
            "FONG Wai Yan Jade",
            "FU Ho Ka Bobby",
            "OUYANG Yuesheng Kevin"
        ]
    },
    {
        id: "members_dep4",
        image: "media/homePage/awesome_coral.jpeg",
        departmentMembers: [
            "NGO Chin Wun Eunice",
            "CHAN Nok Yee Agnes",
            "NG Hin Yan Rebecca",
            "LI Sicheng Edwina",
            "LEUNG Chin Ying Ariana",
            "ZHOU Mo",
            "CHEN Chiu Tung Coco",
            "FONG Wai Yan Jade"
        ]
    },
    {
        id: "members_dep5",
        image: "media/homePage/coralliumLogo.jpg",
        departmentMembers: [
            "DENG Weilin William",
            "OUYANG Yuesheng Kevin"
        ]
    }
];

//load the members groups and members names
document.addEventListener("DOMContentLoaded", function() {
    const getMembersFormattedHTML = function() {
        let htmlContent = "";
        for (let departmentID = 0; departmentID < membersData.length; departmentID++) {
            htmlContent += "<div class=\"department-card\">";
            // htmlContent += "<img src=\"" + membersData[departmentID].image + "\" class=\"department-image\">";
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