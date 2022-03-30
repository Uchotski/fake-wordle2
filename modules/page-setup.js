//Import page limits...
import { minCols, maxCols, minRows, maxRows } from './default-values.js';
import { closeMenu } from './menu-functions.js';

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

/* Write this later */
/* Objective is to change keyboard layouts between Dvorak and QWERTY */
const setKeyboard = () => {
    console.log("The keyboard has been set!");
}

//GAME LAYOUT:
//Generates the HTML game tiles when the word length/number of guesses is changed.
const setGameArea = () => {
    const rows = parseInt(document.getElementById("turns").value, 10);
    const columns = parseInt(document.getElementById("word-length").value, 10);

    if (rows > maxRows || rows < minRows || columns > maxCols || columns < minCols) {
        return alert(`Error! Number of turns must a value between ${minRows} and ${maxRows}, and word length must be between ${minCols} and ${maxCols}!`);
    }

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

    closeMenu();
    return document.getElementById("game-area").innerHTML = generateHTML(rows, columns);
}

export { setLimits, setKeyboard, setGameArea }