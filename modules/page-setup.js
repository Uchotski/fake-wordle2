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

//LISTENABLE KEYBOARD WITH OUTPUT...
let colIndex = 0;
let rowIndex = 0;

const keyboardListen = () => {
    
    //typeWord allows for visible output on the Game Area.
    const typeWord = (keyboardInput) => {
        const columns = document.getElementById("word-length").value;
        const rows = document.getElementById("turns").value;
        const rowToEdit = document.getElementById("game-area").getElementsByClassName("row")[rowIndex];
    
        if (keyboardInput.length == 1) {
            if (colIndex == columns) { return; }
            rowToEdit.getElementsByClassName("game-tile")[colIndex].innerHTML = keyboardInput;
            return colIndex++;
        } else if (keyboardInput.toLowerCase() == "delete") {
            if (colIndex == 0) {
                return;
            } else {
                colIndex--;
                return rowToEdit.getElementsByClassName("game-tile")[colIndex].innerHTML = "";
            }
        } else if (keyboardInput.toLowerCase() == "enter") {
            if (colIndex != columns || rowIndex == rows) {
                return;
            } else {
                console.log("Function to enter guess goes here!");
                colIndex = 0;
                return rowIndex++;
            }
        } else {
            return console.log("Something abnormal occurred!");
        }
    }

    return typeWord(event.target.innerHTML);
}

export { setLimits, setKeyboard, setGameArea, keyboardListen }