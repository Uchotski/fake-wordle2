import { closeMenu } from './menu-functions.js';

//FUNCTION TO GENERATE A NEW WORD OF A SPECIFIED LENGTH (AS AN ARRAY);
const generateWord = (wordLength) => {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const word = [];

    for (let i = 0; i < wordLength; i++) {
        word.push(alphabet[Math.floor(Math.random() * 26)]);
    }

    return word;
}

//LISTENABLE KEYBOARD WITH OUTPUT...
let colIndex = 0;
let rowIndex = 0;

const keyboardListen = () => {

    //typeWord allows for visible output on the Game Area.
    const typeWord = (keyboardInput) => {

        if (!/[A-Za-z]/.test(keyboardInput)) { return; } // Blocks invalid input.

        const columns = document.getElementById("word-length").value;
        const rows = document.getElementById("turns").value;
        const rowToEdit = document.getElementById("game-area").getElementsByClassName("row")[rowIndex];
    
        if (keyboardInput.length == 1) {
            if (colIndex == columns) { return; } //Break point.
            rowToEdit.getElementsByClassName("game-tile")[colIndex].innerHTML = keyboardInput.toUpperCase();
            return colIndex++;
        } else if (keyboardInput.toLowerCase() == "delete" || keyboardInput.toLowerCase() == "backspace") {
            if (colIndex == 0) { return; } //Break point.
            colIndex--;
            return rowToEdit.getElementsByClassName("game-tile")[colIndex].innerHTML = "";
        } else if (keyboardInput.toLowerCase() == "enter") {
            if (colIndex != columns || rowIndex == rows) { return; } //Break point.
            console.log("Function to enter guess goes here!");
            colIndex = 0;
            return rowIndex++;
        } else {
            return console.log("Something abnormal occurred or an invalid key was pressed!");
        }
    }

    //Handles output based on event trigger type.
    if (event.type == "click") {
        return typeWord(event.target.innerHTML);
    } else if (event.type == "keydown") {
        return typeWord(event.key);
    } else {
        return "An error occured!";
    }
}

//THIS IS THE GAME!
const gameStart = () => {
    //Closes the start menu to begin the game.
    console.log("The game has started!");
    closeMenu();

    //Makes the game area typeable.
    document.getElementById("keyboard").addEventListener("click", keyboardListen);
    document.addEventListener("onkeydown", keyboardListen);

}

export { generateWord, keyboardListen }