function capitalize(string) {
    let wordArray = string.split(" ");
    for (i=0; i<wordArray.length; i++) {
        wordArray[i] = wordArray[i][0].toUpperCase() + wordArray[i].substring(1);
    }
    return wordArray.join(" ");
}

module.exports = capitalize;