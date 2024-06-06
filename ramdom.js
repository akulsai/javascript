let bgContainerElement = document.getElementById("bgContainer");
let buttonElement = document.getElementById("button");

let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];

bgContainerElement.style.backgroundColor = bgColorsArray[0];

function onchangeBgColor() {
    let numberofBgColors = bgColorsArray.length;
    let randomBgColorIndex = Math.ceil(Math.random() * numberofBgColors);
    
    if (randomBgColorIndex === numberofBgColors) {
        randomBgColorIndex = numberofBgColors - 1;
    }

    let randomBgColor = bgColorsArray[randomBgColorIndex];

    bgContainerElement.style.backgroundColor = randomBgColor;
}