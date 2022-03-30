//Imports:
import { defaultCols, defaultRows } from './default-values.js';

//MENU FUNCTIONS:
const openMenu = () => {
    return document.getElementById("overlay").style.display = "flex";
}

const closeMenu = () => {
    return document.getElementById("overlay").style.display = "none";
}

const resetMenu = () => {
    document.getElementById("word-length").value = defaultCols;
    return document.getElementById("turns").value = defaultRows;
}

export { openMenu, closeMenu, resetMenu };