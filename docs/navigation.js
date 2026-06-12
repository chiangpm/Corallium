// In charge of the top bar navigation buttons, and also loading each page

const missionPage = document.getElementById("page_mission");
const membersPage = document.getElementById("page_members");
const homePage = document.getElementById("page_home");
const placeholder1Page = document.getElementById("page_p1");
const placeholder2Page = document.getElementById("page_p2");
// const lightmodeButton = document.getElementById("lightmodebutton")

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