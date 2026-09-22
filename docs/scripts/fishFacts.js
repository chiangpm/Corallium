const leftButton = document.getElementById("home_fishFactsLeftButton");
const rightButton = document.getElementById("home_fishFactsRightButton");
const textBox = document.getElementById("home_fishFactsText");

leftButton.addEventListener("mouseenter", () => {
    leftButton.style.backgroundColor = "var(--colors-navbar-buttons-selected)";
});

leftButton.addEventListener("mouseleave", () => {
    leftButton.style.backgroundColor = "var(--colors-navbar-buttons)";
});

rightButton.addEventListener("mouseenter", () => {
    rightButton.style.backgroundColor = "var(--colors-navbar-buttons-selected)";
});

rightButton.addEventListener("mouseleave", () => {
    rightButton.style.backgroundColor = "var(--colors-navbar-buttons)";
});

let currentTextId = 0;
function homeclick_fishFactsScroll(pages) {
    currentTextId += pages;
    while (currentTextId < 0) {
        currentTextId += fishFactsText.length;
    }
    currentTextId %= fishFactsText.length;
    textToDisplay = fishFactsText[currentTextId];

    // languageMode is from languages.js
    if (languageMode == LANG_EN) {
        textBox.innerText = textToDisplay.english
    } else if (languageMode == LANG_TRADCH) {
        textBox.innerText = textToDisplay.tradChinese
    } else if (languageMode == LANG_SIMPCH) {
        textBox.innerText = textToDisplay.simpChinese
    }
}

const fishFactsText = [
    {
        english: "Starfish do not have blood, a heart, gills, nor a brain. Instead, starfish respire by taking in oxygen from seawater through their topside and tube feet, where oxygen diffuses from seawater into their internal fluids and carbon dioxide diffuses out. They also have a water vascular system that carries seawater through canals to the tube feet, but that system is mainly for movement and feeding, not respiration.",
        tradChinese: "??",
        simpChinese: "??"
    },
    {
        english: "Cyanobacteria (the red slime in our CCDD fish tank) are the oldest known organisms to produce oxygen. They photosynthesise underwater, converting carbon dioxide into oxygen. Some species can also do biological nitrogen fixation, called diazotrophy, where atmospheric nitrogen that dissolved into the water becomes biologically useful chemical compounds like ammonium.",
        tradChinese: "??",
        simpChinese: "??"
    }
]

window.addEventListener("DOMContentLoaded", () => {
    homeclick_fishFactsScroll(Math.floor(Date.now()));
});