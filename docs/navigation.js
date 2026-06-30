// In charge of the top bar navigation buttons, and also loading each page

const missionPage = document.getElementById("page_mission");
const membersPage = document.getElementById("page_members");
const homePage = document.getElementById("page_home");
const recruitmentPage = document.getElementById("page_recruitment");
const newsPage = document.getElementById("page_news");
// const lightmodeButton = document.getElementById("lightmodebutton")

document.addEventListener("DOMContentLoaded", function() {
    const getMembersFormattedHTML = function() {
        let htmlContent = "";
        for (let departmentID = 0; departmentID < membersData.length; departmentID++) {
            htmlContent += "<div class=\"departmentmemberslist\">";
            htmlContent += "<h2>" + String(membersData[departmentID].departmentName) + "</h2>";
            for (let memberID = 0; memberID < (membersData[departmentID].departmentMembers).length; memberID++) {
                htmlContent += "<p>" + String(membersData[departmentID].departmentMembers[memberID]) + "</p>";
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
}

const navclick_members = function() {
    missionPage.style.display = "none";
    membersPage.style.display = "block";
    homePage.style.display = "none";
    recruitmentPage.style.display = "none";
    newsPage.style.display = "none";
}

const navclick_home = function() {
    missionPage.style.display = "none";
    membersPage.style.display = "none";
    homePage.style.display = "block";
    recruitmentPage.style.display = "none";
    newsPage.style.display = "none";
}

const navclick_recruitment = function() {
    missionPage.style.display = "none";
    membersPage.style.display = "none";
    homePage.style.display = "none";
    recruitmentPage.style.display = "block";
    newsPage.style.display = "none";
}

const navclick_news = function() {
    missionPage.style.display = "none";
    membersPage.style.display = "none";
    homePage.style.display = "none";
    recruitmentPage.style.display = "none";
    newsPage.style.display = "block";
}

// let isLightMode = true;
// function lightmodetoggle() {
//     let currentTheme = document.documentElement.getAttribute('data-theme');
  
//     // If no manual theme is set yet, infer it from system preference
//     if (!currentTheme) {
//         currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
//     }
    
//     // Calculate and force the next theme state
//     const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
//     document.documentElement.setAttribute('data-theme', newTheme);
//     localStorage.setItem('theme', newTheme);


//     isLightMode = ! isLightMode;
//     if (isLightMode) {
//         lightmodeButton.innerText = "☼";
//     } else {
//         lightmodeButton.innerText = "☽";
//     }
// }