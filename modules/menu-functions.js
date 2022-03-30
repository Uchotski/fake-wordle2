//Imports:
import { defaultCols, defaultRows } from './default-values.js';

//MENU FUNCTIONS:
//Open menu:
const openMenu = () => {
    return document.getElementById("overlay").style.display = "flex";
}

//Close menu:
const closeMenu = () => {
    return document.getElementById("overlay").style.display = "none";
}

//Reset the parameters within the game options:
const resetMenu = () => {
    document.getElementById("word-length").value = defaultCols;
    return document.getElementById("turns").value = defaultRows;
}

export { openMenu, closeMenu, resetMenu };