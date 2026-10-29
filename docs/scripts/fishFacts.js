const leftButton = document.getElementById("home_fishFactsLeftButton");
const rightButton = document.getElementById("home_fishFactsRightButton");
const textBox = document.getElementById("home_fishFactsText");
const pageIdDisplay = document.getElementById("home_fishFactsPageId");

let currentTextId = 0;
function homeclick_fishFactsScroll(pages) {
    currentTextId += pages;
    while (currentTextId < 0) {
        currentTextId += fishFactsText.length;
    }
    currentTextId %= fishFactsText.length;
    const textToDisplay = fishFactsText[currentTextId];
    pageIdDisplay.innerText = "(" + String(currentTextId+1) + "/" + String(fishFactsText.length) + ")";

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
        english: "Starfish do not have blood, a heart, gills, nor a brain. Instead, they respire by taking in oxygen from seawater through their topside and tube feet, where oxygen directly diffuses from seawater into their internal fluids and carbon dioxide diffuses out.",
        tradChinese: "海星沒有血液、心臟、鰓，也沒有大腦。牠們透過體表和管足從海水中攝取氧氣來呼吸：氧氣會直接從海水擴散至海星體內的液體，二氧化碳則向外擴散。",
        simpChinese: "海星没有血液、心脏、鳃，也没有大脑。牠们透过体表和管足从海水中摄取氧气来呼吸：氧气会直接从海水扩散至海星体内的液体，二氧化碳则向外扩散。"
    },
    {
        english: "Cyanobacteria (the red slime in our CCDD fish tank) are the oldest known organisms to produce oxygen. They photosynthesise underwater, converting carbon dioxide into oxygen. Some species can also convert dissolved nitrogen into ammonia, via diazotrophy.",
        tradChinese: "藍細菌（CCDD魚缸裡的紅泥藻）是已知最早可以製造氧氣的生物。牠們在水下進行光合作用，將二氧化碳轉化為氧氣。部分種類還可以透過固氮作用，把水中的溶解氮轉變成氨。",
        simpChinese: "蓝细菌（CCDD鱼缸里的红泥藻）是已知最早可以制造氧气的生物。牠们在水下进行光合作用，将二氧化碳转化为氧气。部分种类还可以透过固氮作用，把水中的溶解氮转变成氨。"
    },
    {
        english: "Sea anemone are a common pest found in our CCDD fish tank, which sting our coral. However, plucking them off coral and rocks only spawns more of them, since their flesh fragments can fully regrow into more anemone (this is called pedal laceration).",
        tradChinese: "海葵是CCDD魚缸中常見的有害生物，會刺傷珊瑚。但直接將其從珊瑚、石頭上拔下，只會長出更多海葵——因為海葵的肉質碎片可以完整再生，變成新的個體（這種方式稱為基盤撕裂生殖）。",
        simpChinese: "海葵是CCDD鱼缸中常见的有害生物，会刺伤珊瑚。但直接将其从珊瑚、石头上拔下，只会长出更多海葵——因为海葵的肉质碎片可以完整再生，变成新的个体（这种方式称为基盘撕裂生殖）。"
    }
]

window.addEventListener("DOMContentLoaded", () => {
    homeclick_fishFactsScroll(Math.floor(Date.now()));

    if (! isMobileDevice()) {
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
    }
});