//IMPORTS:
import { minRows, maxRows, defaultRows, minCols, maxCols, defaultCols } from './modules/default-values.js'; //Default Values for cols/rows.
import { openMenu, closeMenu, resetMenu } from './modules/menu-functions.js'; // Menu toggling and reset options.
import { setLimits, setKeyboard, setGameArea, keyboardListen } from './modules/page-setup.js'; //Limits for input parameters and keyboard layout functions.

//SET UP THE PAGE:
setLimits(minCols, maxCols, defaultCols, minRows, maxRows, defaultRows);
setGameArea(defaultRows, defaultCols);
setKeyboard();

//TEST ZONE:
//Script seems to work for shrinking but, not enlarging...
const setGameTileSize = () => {
    const columns = document.getElementById("word-length").value;
    const keyboard = document.getElementById("keyboard");
    const gameArea = document.getElementById("game-area");
    const gameRows = gameArea.querySelectorAll("div.row");
    const gameRowNumber = gameArea.querySelectorAll("div:not(.row):not(.game-tile)");
    const gameTiles = gameArea.querySelectorAll("div.game-tile");

    const changeTileSize = (wordLength) => {
        const tileMargin = parseInt(window.getComputedStyle(gameArea.querySelector("div.game-tile")).getPropertyValue("margin"), 10);
        const newTileSize = Math.floor((gameRows[0].offsetWidth / wordLength) - ((2 * gameRowNumber[0].offsetWidth) / wordLength)) - (tileMargin * 2);
        console.log(newTileSize);

        gameTiles.forEach(tile => {
            tile.style.width = `${newTileSize - 10}px`;
            tile.style.height = `${newTileSize - 10}px`;
        });
        gameRowNumber.forEach(num => { num.style.height = `${newTileSize - 10}px` });
    }

    if (gameArea.offsetWidth + 10 > keyboard.offsetWidth) {
        return changeTileSize(columns);
    }
}

//LISTENABLE KEYBOARD...
const keyboardListen = () => {
    if (event.target.innerHTML.length == 1) {
        return console.log(event.target.innerHTML);
    } else {
        return;
    }
}


//ADD EVENT LISTENERS:
document.getElementById("menu-button").addEventListener("click", openMenu);
document.getElementById("close-button").addEventListener("click", closeMenu);
document.getElementById("start-button").addEventListener("click", setGameArea);
document.getElementById("reset-button").addEventListener("click", resetMenu);
document.getElementById("keyboard").addEventListener("click", keyboardListen);
window.addEventListener("resize", setGameTileSize);