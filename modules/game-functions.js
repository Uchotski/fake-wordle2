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
            processAnswer();
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

//MANAGES GUESS HANDLING:

const processAnswer = () => {
    //Row with the guess...
    const rowWithGuess = document.getElementById("game-area").getElementsByClassName("row")[rowIndex].querySelectorAll("div.game-tile");

    //Returns the guessed input as an array.
    const collectAnswer = () => {
        const collectedGuess = [];
        
        rowWithGuess.forEach(item => collectedGuess.push(item.innerHTML.toLowerCase()));
        return collectedGuess;
    }

    //Changes the background colour of the tiles based on the guess.
    const changeBackground = (guess, answer) => {
        const correct = "green";
        const partialCorrect = "orange";
        const incorrect = "gray";
        const textColor = "#FFF";

        let checkedLetters = [];
        for (let i = 0; i < answer.length; i++) {
            if (checkedLetters.indexOf(guess[i]) > -1) { continue; } //Skips if the letter in question has already been checked.
            checkedLetters.push(guess[i]); //Adds the letter being checked to an array of letters which have been checked this turn.
            console.log("The letter we are checking the answer for is: ", guess[i]);

            //While the answer still contains the letter being assessed from the guess:
            //checks for all indexes where that letter appears and puts it in the arrayOfIndicies array.
            let arrayOfIndicies = []; //This array will contain all indicies where the guessed letter is within the answer.
            let j = 0;
            while (answer.indexOf(guess[i], j) > -1) {
                const index = answer.indexOf(guess[i], j);
                arrayOfIndicies.push(index);
                j = index + 1;
            }
            console.log(arrayOfIndicies);

            //Changes the styling of the letters and keyboard based on the arrayOfIndicies:
            if (arrayOfIndicies.length > 0) {
                arrayOfIndicies.forEach(index => {
                    console.log(`Checking index: ${index}!`);
                    console.log(answer, guess);
                    if (answer[index] === guess[index]) {
                        rowWithGuess[index].style.backgroundColor = correct;
                        rowWithGuess[index].style.color = textColor;
                        console.log(answer[index], guess[index]);
                        console.log(answer.filter(item => item.match(`${answer[index]}`)).length);
                    } else if (answer[index] != guess[index] && arrayOfIndicies.length >= answer.filter(item => item.match(`${answer[index]}`)).length) {
                        rowWithGuess[index].style.backgroundColor = partialCorrect;
                        rowWithGuess[index].style.color = textColor;
                    } else {
                        rowWithGuess[index].style.backgroundColor = incorrect;
                        rowWithGuess[index].style.color = textColor;
                    }
                });
            } else {
                //Needs to change ALL of the incorrect letters (if guessing multiple letters...)
                rowWithGuess[i].style.backgroundColor = incorrect;
                rowWithGuess[i].style.color = textColor;
            }
        }
    }

    const wordToGuess = newWord;
    const guessedWord = collectAnswer();

    console.log(guessedWord, wordToGuess);
    return changeBackground(guessedWord, wordToGuess);
}

//THIS IS THE GAME!
let newWord;

const startGame = () => {
    //Closes the start menu to begin the game.
    console.log("The game has started!");
    closeMenu();

    //Makes the game area typeable.
    document.getElementById("keyboard").addEventListener("click", keyboardListen);
    document.addEventListener("onkeydown", keyboardListen);

    //Generates a new word.
    const wordLength = document.getElementById("word-length").value;
    newWord = generateWord(wordLength);
    console.log(newWord);
}

export { generateWord, keyboardListen, startGame, processAnswer }