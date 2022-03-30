//IMPORTS:
import { minRows, maxRows, defaultRows, minCols, maxCols, defaultCols } from './modules/default-values.js'; //Default Values for cols/rows.
import { openMenu, closeMenu, resetMenu } from './modules/menu-functions.js'; // Menu toggling and reset options.
import { setLimits, setKeyboard, setGameArea } from './modules/page-setup.js'; //Limits for input parameters and keyboard layout functions.

//SET UP THE PAGE:
setLimits(minCols, maxCols, defaultCols, minRows, maxRows, defaultRows);
setGameArea(defaultRows, defaultCols);
setKeyboard();

//ADD EVENT LISTENERS:
document.getElementById("menu-button").addEventListener("click", openMenu);
document.getElementById("close-button").addEventListener("click", closeMenu);
document.getElementById("start-button").addEventListener("click", setGameArea);
document.getElementById("reset-button").addEventListener("click", resetMenu);