const missionPage = document.getElementById("page_mission");
const membersPage = document.getElementById("page_members");
const homePage = document.getElementById("page_home");
const placeholder1Page = document.getElementById("page_p1");
const placeholder2Page = document.getElementById("page_p2");

function navclick_mission() {
    missionPage.style.display = "block";
    membersPage.style.display = "none";
    homePage.style.display = "none";
    placeholder1Page.style.display = "none";
    placeholder2Page.style.display = "none";
}

function navclick_members() {
    missionPage.style.display = "none";
    membersPage.style.display = "block";
    homePage.style.display = "none";
    placeholder1Page.style.display = "none";
    placeholder2Page.style.display = "none";
}

function navclick_home() {
    missionPage.style.display = "none";
    membersPage.style.display = "none";
    homePage.style.display = "block";
    placeholder1Page.style.display = "none";
    placeholder2Page.style.display = "none";
}

function navclick_p1() {
    missionPage.style.display = "none";
    membersPage.style.display = "none";
    homePage.style.display = "none";
    placeholder1Page.style.display = "block";
    placeholder2Page.style.display = "none";
}

function navclick_p2() {
    missionPage.style.display = "none";
    membersPage.style.display = "none";
    homePage.style.display = "none";
    placeholder1Page.style.display = "none";
    placeholder2Page.style.display = "block";
}