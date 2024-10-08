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
            gridSquare.removeAttribute("style");
            gridSquare.classList.add("black-paint");
            break;
    
    
        case "random-color":
            gridSquare.className = "grid-item";
            gridSquare.removeAttribute("style");
            gridSquare.style.backgroundColor = getRandomRgb();
            break;
    
    
        case "shader":
            gridSquare.className = "grid-item";
            gridSquare.classList.add("black-paint");
            if (gridSquare.style.opacity === '') {
                gridSquare.removeAttribute("style");
                gridSquare.style.opacity = 0.1;
            } else {
                gridSquare.style.opacity = parseFloat(gridSquare.style.opacity) + 0.1;
            };
            break;
    
    
        case "eraser":
            gridSquare.className = "grid-item";
            gridSquare.removeAttribute("style");
            break;    
    
        default:
            gridSquare.className = "grid-item";
            gridSquare.removeAttribute("style");
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