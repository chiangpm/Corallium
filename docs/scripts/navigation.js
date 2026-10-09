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

// Set the active navigation button and update the styles accordingly
const setActiveNavButton = function(activeButton) {
    const navButtons = [missionButton, membersButton, homeButton, recruitmentButton, newsButton]
    navButtons.forEach(function(button) {
        button.classList.remove("homeButton");
        button.classList.add("nothomeButton");
    });

    activeButton.classList.remove("nothomeButton");
    activeButton.classList.add("homeButton");
}

// const lightmodeButton = document.getElementById("lightmodebutton")

//checks if device is phone; if is phone, ignore hover css effects.
function isMobileDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

const navButtons = document.querySelectorAll(".navButton");

navButtons.forEach((button) => {
    if (isMobileDevice()) return; //<- if phone then ignore hover effect !!!

    button.addEventListener("mouseenter", () => {
        button.style.backgroundColor = "var(--colors-navbar-buttons-selected)";

    });

    button.addEventListener("mouseleave", () => {
        button.style.backgroundColor = "";
    });
});
const navclick_mission = function() {
    missionPage.style.display = "block";
    membersPage.style.display = "none";
    homePage.style.display = "none";
    recruitmentPage.style.display = "none";
    newsPage.style.display = "none";

    setActiveNavButton(missionButton);
}

const navclick_members = function() {
    missionPage.style.display = "none";
    membersPage.style.display = "block";
    homePage.style.display = "none";
    recruitmentPage.style.display = "none";
    newsPage.style.display = "none";

    setActiveNavButton(membersButton);
}

const navclick_home = function() {
    missionPage.style.display = "none";
    membersPage.style.display = "none";
    homePage.style.display = "block";
    recruitmentPage.style.display = "none";
    newsPage.style.display = "none";

    setActiveNavButton(homeButton);
}

const navclick_recruitment = function() {
    missionPage.style.display = "none";
    membersPage.style.display = "none";
    homePage.style.display = "none";
    recruitmentPage.style.display = "block";
    newsPage.style.display = "none";

    setActiveNavButton(recruitmentButton);
}

const navclick_news = function() {
    missionPage.style.display = "none";
    membersPage.style.display = "none";
    homePage.style.display = "none";
    recruitmentPage.style.display = "none";
    newsPage.style.display = "block";

    setActiveNavButton(newsButton);
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
        topBarMain.style.backgroundColor = "var(--colors-navbar)";
        contentsFrame.style.top = "min(10vh, 8.333vw)";
    } else {
        topBarMid.style.visibility = "hidden";
        topBarRight.style.visibility = "hidden";
        topBarMain.style.backgroundColor = "transparent";
        contentsFrame.style.top = "0";
    }
}