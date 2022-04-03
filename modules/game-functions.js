//FUNCTION TO GENERATE A NEW WORD OF A SPECIFIED LENGTH (AS AN ARRAY);
const generateWord = (wordLength) => {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const word = [];

    for (let i = 0; i < wordLength; i++) {
        word.push(alphabet[Math.floor(Math.random() * 26)]);
    }

    return word;
}

export { generateWord }