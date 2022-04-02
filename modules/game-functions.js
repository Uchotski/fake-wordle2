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
            if (colIndex == columns) { return; } //Break point.
            rowToEdit.getElementsByClassName("game-tile")[colIndex].innerHTML = keyboardInput.toUpperCase();
            return colIndex++;
        } else if (keyboardInput.toLowerCase() == "delete") {
            if (colIndex == 0) { return; } //Break point.
            colIndex--;
            return rowToEdit.getElementsByClassName("game-tile")[colIndex].innerHTML = "";
        } else if (keyboardInput.toLowerCase() == "enter") {
            if (colIndex != columns || rowIndex == rows) { return; } //Break point.
            console.log("Function to enter guess goes here!");
            colIndex = 0;
            return rowIndex++;
        } else {
            return console.log("Something abnormal occurred!");
        }
    }

    return typeWord(event.target.innerHTML);
}

export { keyboardListen }