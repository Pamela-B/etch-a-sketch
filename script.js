const blackColorButton = document.querySelector("#black");
const randomColorButton = document.querySelector("#random-color");
const shaderButton = document.querySelector("#shader");
const eraserButton = document.querySelector("#eraser");
const cleanGridButton = document.querySelector("#clean-grid");

let gridItems;

let brushType = "black";

blackColorButton.addEventListener("click", () => {return brushType = `${blackColorButton.id}`});
randomColorButton.addEventListener("click", () => {return brushType = `${randomColorButton.id}`});
shaderButton.addEventListener("click", () => {return brushType = `${shaderButton.id}`});
eraserButton.addEventListener("click", () => {return brushType = `${eraserButton.id}`});
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