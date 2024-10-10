const grid = document.querySelector("#grid");

const blackColorButton = document.querySelector("#black");
const randomColorButton = document.querySelector("#random-color");
const shaderButton = document.querySelector("#shader");
const eraserButton = document.querySelector("#eraser");
const cleanGridButton = document.querySelector("#clean-grid");

let gridItems;

let brushType = "black";

blackColorButton.addEventListener("click", () => { brushType = blackColorButton.id });
randomColorButton.addEventListener("click", () => { brushType = randomColorButton.id });
shaderButton.addEventListener("click", () => { brushType = shaderButton.id });
eraserButton.addEventListener("click", () => { brushType = eraserButton.id} );
cleanGridButton.addEventListener("click", () => {
    for (let i = 0; i < gridItems.length; i++) {
        gridItems[i].removeAttribute("style");
        gridItems[i].className = "grid-item"
    };
});

let mouseIsDown = false;
const body = document.querySelector('body');
body.addEventListener('mousedown', () => {mouseIsDown = true});
body.addEventListener('mouseup', () => {mouseIsDown = false});

const errorMessage = document.querySelector("#wrong-grid-size");
const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", gridSizeCheckAndRestart);

createNewGrid(16);