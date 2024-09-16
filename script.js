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
};

function resetGrid() {
    grid.replaceChildren();
}

const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => {
    const newGridSize = document.querySelector("#grid-size").value;
    resetGrid();
    createNewGrid(newGridSize);
})

createNewGrid(16);