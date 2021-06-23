// Reaction Time Project

// Global Variables

let redButtonEl = document.getElementById("red-circle");
redButtonEl.addEventListener("click", badClick);
let startBtnEl = document.getElementById("start-btn");
startBtnEl.addEventListener("click", startTest);
let reactionBtnEl = document.getElementById("green-circle");
reactionBtnEl.addEventListener("click", reactionClicked);
let currentTime = document.getElementById("click-time");
let average = document.getElementById("average-time");
let nextReaction = setInterval(reactionClicked, randomInt(1000, 3001));

let time = [reactionClicked.now()];

function startTest(event) {
    setInterval(changeColor, randomInt(1500, 3001));
}

function changeColor() {
    redButtonEl.style = "display: none;";
    reactionBtnEl.style = "display: initial;";
}

function reactionClicked(event) {
    reactionBtnEl.style = "display: none;";
    redButtonEl.style = "display: initial;";
    currentTime.innerHTML = `${time}`;
    nextReaction+= 5;
}

function badClick(event) {
    alert("Do not click before the circle is green!");
}