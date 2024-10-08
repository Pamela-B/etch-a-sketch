function createNewGrid(gridSize) {
    const grid = document.querySelector("#grid");
    for (let i = 0; i < gridSize; i++) {
        const newGridColumn = document.createElement("div");
        newGridColumn.classList.add("grid-col");
        for (let j = 0; j < gridSize; j++) {
            const newGridItem = document.createElement("div");
            newGridItem.classList.add("grid-item");
            newGridColumn.appendChild(newGridItem);
        };
        grid.appendChild(newGridColumn);
    };

    gridItems = document.querySelectorAll(".grid-item");

    paint();
};

function paint() {
        for (let i = 0; i < gridItems.length; i++) {
        gridItems[i].addEventListener('mouseover', () => {
            if (mouseIsDown) {
                paintAccordingToBrush(gridItems[i]);
            };
        });
    };
}

function paintAccordingToBrush(gridSquare) {
    gridSquare.style.removeProperty("background-color");
    switch (brushType) {
        case "black":
            gridSquare.className = "grid-item";
            gridSquare.classList.add("black-paint");
            break;
    
    
        case "random-color":
            gridSquare.className = "grid-item";
            gridSquare.style.backgroundColor = getRandomRgb();
            break;
    
    
        case "shader":
            gridSquare.className = "grid-item";
            gridSquare.classList.add("black-paint");
            if (gridSquare.style.opacity === '') {
                gridSquare.style.opacity = 0.1;
            } else {
                gridSquare.style.opacity = parseFloat(gridSquare.style.opacity) + 0.1;
            };
            break;
    
    
        case "eraser":
            gridSquare.className = "grid-item";
            break;    
    
        default:
            gridSquare.className = "grid-item";
            gridSquare.classList.add("black-paint");
    };
};

function deleteGrid() {
    grid.replaceChildren();
};

function gridSizeCheckAndRestart() {
    const newGridSize = document.querySelector("#grid-size").value;
    if (newGridSize < 1 || newGridSize > 100) {
        return errorMessage.textContent = "Grid size has to be between 1 and 100!";
    } else {
        errorMessage.textContent = "\n";
        deleteGrid();
        createNewGrid(newGridSize);
    };
};

function getRandomRgb() {
    const num = Math.round(0xffffff * Math.random());
    const r = num >> 16;
    const g = num >> 8 & 255;
    const b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
};

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