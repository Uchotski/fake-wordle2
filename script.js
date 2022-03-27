//DEFAULT VALUES:
const minRows = 1;
const maxRows = 99;
const defaultRows = 6;
const minCols = 3;
const maxCols = 8;
const defaultCols = 5;

//MENU FUNCTIONS:
const openMenu = () => {
    return document.getElementById("overlay").style.display = "flex";
}

const closeMenu = () => {
    return document.getElementById("overlay").style.display = "none";
}

const resetMenu = () => {
    document.getElementById("word-length").value = 5;
    return document.getElementById("turns").value = 6;
}

//GAME LAYOUT FUNCTION:
const generateHTML = (rows, columns) => {
    const htmlToAdd = [];

    for (let i = 0; i < rows; i++) {
        htmlToAdd.push(`<div class="row">`);
        for (let j = 0; j < columns + 1; j++) {
            if (j == 0) {
                htmlToAdd.push(`  <div>${i + 1}</div>`);
            } else {
                htmlToAdd.push(`  <div class="game-tile"></div>`);
            }
        }
        htmlToAdd.push(`</div>`);
    }

    return htmlToAdd.join("\n");
}

//Work on this!!
const resizeGameTiles = () => {
    const gameTiles = document.getElementById("game-area").getElementsByClassName("game-tile");

    return gameTiles.forEach(tile => tile.style.backgroundColor = "#FFCCFF");
}

const setGameArea = () => {
    const rows = parseInt(document.getElementById("turns").value, 10);
    const columns = parseInt(document.getElementById("word-length").value, 10);

    if (rows > maxRows || rows < minRows || columns > maxCols || columns < minCols) {
        return alert("Error! Number of turns must a value between 1 and 99, and word length must be between 1 and 3!");
    }

    closeMenu();
    return document.getElementById("game-area").innerHTML = generateHTML(rows, columns);
}

//PAGE SET-UP:
const setLimits = (minCols, maxCols, defaultCols, minRows, maxRows, defaultRows) => {
    const rows = document.getElementById("turns");
    const cols = document.getElementById("word-length");

    cols.min = minCols;
    cols.max = maxCols;
    cols.value = defaultCols;

    rows.min = minRows;
    rows.max = maxRows;
    rows.value = defaultRows;
    return;
}

setLimits(minCols, maxCols, defaultCols, minRows, maxRows, defaultRows);
setGameArea(6, 5);

//EVENT LISTENERS:
document.getElementById("menu-button").addEventListener("click", openMenu);
document.getElementById("close-button").addEventListener("click", closeMenu);
document.getElementById("start-button").addEventListener("click", setGameArea);
document.getElementById("reset-button").addEventListener("click", resetMenu);