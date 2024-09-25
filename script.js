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


    const gridItem = document.querySelectorAll(".grid-item");
    for (let i = 0; i < gridItem.length; i++) {
        gridItem[i].addEventListener('mousemove', () => {
            if (mouseIsDown) {
                gridItem[i].classList.add("black-background");
            };
        });
    };
};

function resetGrid() {
    grid.replaceChildren();
};

function gridSizeCheckAndRestart() {
    const newGridSize = document.querySelector("#grid-size").value;
    if (newGridSize < 1 || newGridSize > 100) {
        return errorMessage.classList.remove("invisible");
    } else {
        errorMessage.classList.add("invisible");
        resetGrid();
        createNewGrid(newGridSize);
    };
};

let mouseIsDown = false;
const body = document.querySelector('body');
body.addEventListener('mousedown', () => {mouseIsDown = true});
body.addEventListener('mouseup', () => {mouseIsDown = false});

const errorMessage = document.querySelector("#wrong-grid-size");
const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", gridSizeCheckAndRestart);

createNewGrid(16);