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
        tradChinese: "在CCDD，我們負責維護魚缸，包括監控並調控水質，例如酸鹼值、水溫、硝酸鹽以及鹽度。我們每天需餵魚兩次、定期換水，並清除藍細菌。為維持脆弱的海水生態系、讓珊瑚健康生長，專門的成員團隊會持續管控水質，讓其接近天然海水。",
        simpChinese: "在CCDD，我们负责维护鱼缸，包括监控并调控水质，例如酸碱值、水温、硝酸盐以及盐度。我们每天需喂鱼两次、定期换水，并清除蓝细菌。为维持脆弱的海水生态系、让珊瑚健康生长，专门的成员团队会持续管控水质，让其接近天然海水。",
        
englishSubheading: "Fish Tank",
        tradChineseSubheading: "魚缸",
        simpChineseSubheading: "鱼缸",
        img: "media/missionPage/Kaden_refractometer.jpeg"
    },
    {
        english: "To help coral grow, we frag large colonies by cutting coral at their skeletal branches, and replanting the branches, so that each branch can healthily grow as a new smaller colony. Fragging prevents overgrowth, allowing each colony to have more space and resources to grow larger. Fragging also accelerates repopulation by stimulating the coral's natural regeneration response.",
        tradChinese: "為協助珊瑚繁殖，我們會對大型珊瑚群體進行斷枝繁殖：沿珊瑚的骨骼分枝切下片段，再重新定植，讓每一段分枝都能長成健康的新小群體。斷枝可以避免珊瑚過度擴張，讓每個群體擁有更多空間與資源繼續長大；同時也會刺激珊瑚的自然再生機制，加快族群擴張。",
        simpChinese: "为协助珊瑚繁殖，我们会对大型珊瑚群体进行断枝繁殖：沿珊瑚的骨骼分枝切下片段，再重新定植，让每一段分枝都能长成健康的新小群体。断枝可以避免珊瑚过度扩张，让每个群体拥有更多空间与资源继续长大；同时也会刺激珊瑚的自然再生机制，加快族群扩张。",

englishSubheading: "Coral Fragging",
        tradChineseSubheading: "珊瑚分株",
        simpChineseSubheading: "珊瑚分株",
        img: "media/missionPage/fragging.png"
    },
    {
        english: "We collaborated with HKU students to help research seagrass growth in Hong Kong by planting and monitoring seagrass growth near Tai Tam Tuk resevoir. This research aims to increase the understanding of optimal growth conditions for seagrass, so that better systems can be set up to help preserve Hong Kong's unique ecosystem.",
        tradChinese: "我們與香港大學學生合作，在大潭篤水塘附近種植海草並監測其生長狀況，協助研究香港海草的生長特性。這項研究希望加深我們對海草最佳生長環境的認識，從而建立更完善的方案，守護香港獨特的生態系統。",
        simpChinese: "我们与香港大学学生合作，在大潭笃水塘附近种植海草并监测其生长状况，协助研究香港海草的生长特性。这项研究希望加深我们对海草最佳生长环境的认识，从而建立更完善的方案，守护香港独特的生态系统。",
        
englishSubheading: "Outside School Activities",
        tradChineseSubheading: "校外活動",
        simpChineseSubheading: "校外活动",
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