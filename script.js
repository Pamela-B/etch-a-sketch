function createNewGrid(gridSize) {
    const grid = document.querySelector("#grid");
    for (let i = 0; i < gridSize; i++) {
        const newGridHorizontalItem = document.createElement("div");
        newGridHorizontalItem.style.cssText = "flex: 1 1 auto; display: flex; flex-direction: column;";
        for (let j = 0; j < gridSize; j++) {
            const newGridVerticalItem = document.createElement("div");
            newGridVerticalItem.style.cssText = "flex: 1 1 auto; border: 1px solid rgb(200 200 200);";
            newGridHorizontalItem.appendChild(newGridVerticalItem);
        };
        grid.appendChild(newGridHorizontalItem);
    };
};

createNewGrid(16);