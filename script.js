function createNewGrid(gridSize) {
    const grid = document.querySelector("#grid");
    for (let i = 0; i < gridSize; i++) {
        const newGridHorizontalItem = document.createElement("div");
        newGridHorizontalItem.classList.add("grid-col");
        for (let j = 0; j < gridSize; j++) {
            const newGridVerticalItem = document.createElement("div");
            newGridVerticalItem.classList.add("grid-item");
            newGridHorizontalItem.appendChild(newGridVerticalItem);
        };
        grid.appendChild(newGridHorizontalItem);
    };
};

createNewGrid(16);