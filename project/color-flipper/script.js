boardText = document.getElementById("color-board-text");
boardBtn = document.getElementById("color-board-btn");
contentSection = document.getElementById("content-section");

const colorArr = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

function getRandomColor(colorArr) {
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += colorArr[Math.floor(Math.random()*(colorArr.length))];
    }
    console.log(color);
    return color;
}

boardBtn.addEventListener("click", ()=>{
    let color = getRandomColor(colorArr);
    boardText.innerText = color;
    contentSection.style.backgroundColor = color;
});