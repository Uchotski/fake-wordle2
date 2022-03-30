//IMPORTS:
import { minRows, maxRows, defaultRows, minCols, maxCols, defaultCols } from './modules/default-values.js'; //Default Values for cols/rows.
import { openMenu, closeMenu, resetMenu } from './modules/menu-functions.js'; // Menu toggling and reset options.
import { setLimits, setKeyboard, setGameArea } from './modules/page-setup.js'; //Limits for input parameters and keyboard layout functions.

//SET UP THE PAGE:
setLimits(minCols, maxCols, defaultCols, minRows, maxRows, defaultRows);
setGameArea(defaultRows, defaultCols);
setKeyboard();

<<<<<<< HEAD
//ADD EVENT LISTENERS:
=======
//GENERATE A RANDOM WORD:

const generateWord = (num) => {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const wordToGuess = [];

    for (let i = 0; i < num; i++) {
        wordToGuess.push(alphabet[Math.floor(Math.random() * alphabet.length)]);
    }

    return wordToGuess;
}

//EVENT LISTENERS:
>>>>>>> 7077239de384a75497bd55ca505d843c11f1d68b
document.getElementById("menu-button").addEventListener("click", openMenu);
document.getElementById("close-button").addEventListener("click", closeMenu);
document.getElementById("start-button").addEventListener("click", setGameArea);
document.getElementById("reset-button").addEventListener("click", resetMenu);