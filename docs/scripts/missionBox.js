const buttonL = document.getElementById("mission_mainContent2ButtonL");
const buttonR = document.getElementById("mission_mainContent2ButtonR");
const subheading = document.getElementById("mission_mainContent2Subheading");
const mainText = document.getElementById("mission_mainContent2MainText");
const boxPhoto = document.getElementById("mission_mainContent2Image");

let missionBoxPageId = 0;
function missionclick_BoxScroll(pages) {
    missionBoxPageId += pages;
    while (missionBoxPageId < 0) {
        missionBoxPageId += missionBoxText.length;
    }
    missionBoxPageId %= missionBoxText.length;
    const textToDisplay = missionBoxText[missionBoxPageId];

    // languageMode is from languages.js
    boxPhoto.src = textToDisplay.img;
    if (languageMode == LANG_EN) {
        subheading.innerText = textToDisplay.englishSubheading;
        mainText.innerText = textToDisplay.english;
    } else if (languageMode == LANG_TRADCH) {
        subheading.innerText = textToDisplay.tradChineseSubheading;
        mainText.innerText = textToDisplay.tradChinese;
    } else if (languageMode == LANG_SIMPCH) {
        subheading.innerText = textToDisplay.simpChineseSubheading;
        mainText.innerText = textToDisplay.simpChinese;
    }
}

const missionBoxText = [
    {
        english: "In CCDD, our duties for running the fish tank include monitoring and controlling water conditions, like pH, temperature, nitrate, and salinity levels. We also feed our fish twice every day, do periodic water changes, and do cyanobacteria removal. In order to maintain the delicate saltwater ecosystem so that the coral can thrive, a dedicated group of members keep the fish tank's water quality in check to match natural seawater.",
        tradChinese: "??",
        simpChinese: "??",
        englishSubheading: "Fish Tank",
        tradChineseSubheading: "? ?",
        simpChineseSubheading: "??",
        img: "media/missionPage/Kaden_refractometer.jpeg"
    },
    {
        english: "To help coral grow, we frag large colonies by cutting coral at their skeletal branches, and replanting the branches, so that each branch can healthily grow as a new smaller colony. Fragging prevents overgrowth, allowing each colony to have more space and resources to grow larger. Fragging also accelerates repopulation by stimulating the coral's natural regeneration response.",
        tradChinese: "??",
        simpChinese: "??",
        englishSubheading: "Coral Fragging",
        tradChineseSubheading: "? ?",
        simpChineseSubheading: "??",
        img: "media/missionPage/fragging.png"
    },
    {
        english: "We collaborated with HKU students to help research seagrass growth in Hong Kong by planting and monitoring seagrass growth near Tai Tam Tuk resevoir. This research aims to increase the understanding of optimal growth conditions for seagrass, so that better systems can be set up to help preserve Hong Kong's unique ecosystem.",
        tradChinese: "??",
        simpChinese: "??",
        englishSubheading: "Outside School Activities",
        tradChineseSubheading: "? ?",
        simpChineseSubheading: "??",
        img: "media/missionPage/Seagrass_temp.jpeg"
    }
]

window.addEventListener("DOMContentLoaded", () => {
    missionclick_BoxScroll(Math.floor(Date.now()));

    if (! isMobileDevice()) {
        buttonL.addEventListener("mouseenter", () => {
            buttonL.style.backgroundColor = "var(--colors-mission-box-buttons-selected)";
        });

        buttonL.addEventListener("mouseleave", () => {
            buttonL.style.backgroundColor = "var(--colors-mission-box-buttons)";
        });

        buttonR.addEventListener("mouseenter", () => {
            buttonR.style.backgroundColor = "var(--colors-mission-box-buttons-selected)";
        });

        buttonR.addEventListener("mouseleave", () => {
            buttonR.style.backgroundColor = "var(--colors-mission-box-buttons)";
        });
    }
});