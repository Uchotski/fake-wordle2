//MENU FUNCTIONS:
const openMenu = () => {
    return document.getElementById("overlay").style.display = "flex";
}

const closeMenu = () => {
    return document.getElementById("overlay").style.display = "none";
}

const resetMenu = () => {
    document.getElementById("word-length").value = 5;
    return document.getElementById("turns").value = 6;
}

export { openMenu, closeMenu, resetMenu };