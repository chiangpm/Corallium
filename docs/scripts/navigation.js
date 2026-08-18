// In charge of the top bar navigation buttons, and also loading each page

const missionPage = document.getElementById("page_mission");
const membersPage = document.getElementById("page_members");
const homePage = document.getElementById("page_home");
const recruitmentPage = document.getElementById("page_recruitment");
const newsPage = document.getElementById("page_news");

const missionButton = document.getElementById("nav_mission")
const membersButton = document.getElementById("nav_members")
const homeButton = document.getElementById("nav_home")
const recruitmentButton = document.getElementById("nav_recruitment")
const newsButton = document.getElementById("nav_news")

// const lightmodeButton = document.getElementById("lightmodebutton")

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


const navclick_mission = function() {
    missionPage.style.display = "block";
    membersPage.style.display = "none";
    homePage.style.display = "none";
    recruitmentPage.style.display = "none";
    newsPage.style.display = "none";

    missionButton.style.backgroundColor = "light-dark(#ffffff, #505050)";
    membersButton.style.backgroundColor = "transparent";
    homeButton.style.backgroundColor = "transparent";
    recruitmentButton.style.backgroundColor = "transparent";
    newsButton.style.backgroundColor = "transparent";
}

const navclick_members = function() {
    missionPage.style.display = "none";
    membersPage.style.display = "block";
    homePage.style.display = "none";
    recruitmentPage.style.display = "none";
    newsPage.style.display = "none";

    missionButton.style.backgroundColor = "transparent";
    membersButton.style.backgroundColor = "light-dark(#ffffff, #505050)";
    homeButton.style.backgroundColor = "transparent";
    recruitmentButton.style.backgroundColor = "transparent";
    newsButton.style.backgroundColor = "transparent";
}

const navclick_home = function() {
    missionPage.style.display = "none";
    membersPage.style.display = "none";
    homePage.style.display = "block";
    recruitmentPage.style.display = "none";
    newsPage.style.display = "none";

    missionButton.style.backgroundColor = "transparent";
    membersButton.style.backgroundColor = "transparent";
    homeButton.style.backgroundColor = "light-dark(#ffffff, #505050)";
    recruitmentButton.style.backgroundColor = "transparent";
    newsButton.style.backgroundColor = "transparent";
}

const navclick_recruitment = function() {
    missionPage.style.display = "none";
    membersPage.style.display = "none";
    homePage.style.display = "none";
    recruitmentPage.style.display = "block";
    newsPage.style.display = "none";

    missionButton.style.backgroundColor = "transparent";
    membersButton.style.backgroundColor = "transparent";
    homeButton.style.backgroundColor = "transparent";
    recruitmentButton.style.backgroundColor = "light-dark(#ffffff, #505050)";
    newsButton.style.backgroundColor = "transparent";
}

const navclick_news = function() {
    missionPage.style.display = "none";
    membersPage.style.display = "none";
    homePage.style.display = "none";
    recruitmentPage.style.display = "none";
    newsPage.style.display = "block";

    missionButton.style.backgroundColor = "transparent";
    membersButton.style.backgroundColor = "transparent";
    homeButton.style.backgroundColor = "transparent";
    recruitmentButton.style.backgroundColor = "transparent";
    newsButton.style.backgroundColor = "light-dark(#ffffff, #505050)";
}


let menuOpen = true;
function configclick_menu() {
    const menuButton = document.getElementById("config_menu");
    const topBarMain = document.getElementById("topbar");
    const topBarMid = document.getElementById("topbar_frame");
    const topBarRight = document.getElementById("topbar_frame_right");
    const contentsFrame = document.getElementById("contents_frame");
    menuOpen = ! menuOpen;
    if (menuOpen) {
        topBarMid.style.visibility = "visible";
        topBarRight.style.visibility = "visible";
        topBarMain.style.backgroundColor = "light-dark(#8ba6e3, #303030)";
        contentsFrame.style.top = "min(10vh, 8.333vw)";
    } else {
        topBarMid.style.visibility = "hidden";
        topBarRight.style.visibility = "hidden";
        topBarMain.style.backgroundColor = "transparent";
        contentsFrame.style.top = "0";
    }
}