const membersData = [
    {
        id: "members_dep1",
        // departmentName: "Tank Maintenance Department",
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
        // departmentName: "Public Relations Department",
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
        // departmentName: "Accounting and Finance Department",
        departmentMembers: [
            // "Accounting and Finance Team", // This is extra
            "FONG Wai Yan Jade",
            "FU Ho Ka Bobby",
            "OUYANG Yuesheng Kevin"
        ]
    },
    {
        id: "members_dep4",
        // departmentName: "Art and Design Department",
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
        // departmentName: "Web Development Department",
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
            htmlContent += "<div class=\"departmentmemberslist\">";
            // htmlContent += "<h2 id=\"" + membersData[departmentID].id + "\">" + String(membersData[departmentID].departmentName) + "</h2>";
            htmlContent += "<h2 class=\"departmentTitles\" id=\"" + membersData[departmentID].id + "\"></h2>";
            for (let memberID = 0; memberID < (membersData[departmentID].departmentMembers).length; memberID++) {
                htmlContent += "<p class=\"departmentText\">" + String(membersData[departmentID].departmentMembers[memberID]) + "</p>";
            }
            htmlContent += "</div>";
        }
        // console.log(htmlContent)
        return htmlContent;
    }

    document.getElementById("departments_frame").innerHTML = getMembersFormattedHTML();
});