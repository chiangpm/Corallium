const whyButton = document.getElementById("recruitment_subpageButtonWhy");
const signupButton = document.getElementById("recruitment_subpageButtonSignup");
const signupFrame = document.getElementById("recruitment_subpageButtonsFrame");
const whySubpage = document.getElementById("recruitment_subpageWhy");
const signupSubpage = document.getElementById("recruitment_subpageSignup");

let subpageId = "why";

function recruitmentclick_subpageWhy() {
    subpageId = "why";
    whySubpage.style.display = "block";
    signupSubpage.style.display = "none";
    whyButton.style.backgroundColor = "var(--colors-recruitment-subpage-background)";
    signupButton.style.backgroundColor = "transparent";
};

function recruitmentclick_subpageSignup() {
    subpageId = "signup";
    whySubpage.style.display = "none";
    signupSubpage.style.display = "block";
    whyButton.style.backgroundColor = "transparent";
    signupButton.style.backgroundColor = "var(--colors-recruitment-subpage-background)";
};

const subpageButtons = document.querySelectorAll(".recruitment_subpageButton");

function isMobileDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

whyButton.addEventListener("mouseenter", () => {
    if (isMobileDevice()) return;
    if (subpageId == "signup") {
        whyButton.style.backgroundColor = "var(--colors-navbar-buttons-selected)";
    }
});

whyButton.addEventListener("mouseleave", () => {
    if (isMobileDevice()) return;
    if (subpageId == "why") {
        whyButton.style.backgroundColor = "var(--colors-recruitment-subpage-background)";
    } else {
        whyButton.style.backgroundColor = "transparent";
    }
});

signupButton.addEventListener("mouseenter", () => {
    if (isMobileDevice()) return;
    if (subpageId == "why") {
        signupButton.style.backgroundColor = "var(--colors-navbar-buttons-selected)";
    }
});

signupButton.addEventListener("mouseleave", () => {
    if (isMobileDevice()) return;
    if (subpageId == "signup") {
        signupButton.style.backgroundColor = "var(--colors-recruitment-subpage-background)";
    } else {
        signupButton.style.backgroundColor = "transparent";
    }
});


window.addEventListener("DOMContentLoaded", () => {
    recruitmentclick_subpageSignup()
});