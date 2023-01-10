function reverseString(string) {
    let reverse = "";
    for (let i=string.length-1; i>-1; i--) {
        reverse += string[i];
    }
    return reverse
}

// reverse recursively 
function reverseStringRecursive(string) {
    if (string ==="") return "";

    return reverseString(string.slice(1)) + string[0]
}

module.exports = reverseString;
module.exports = reverseStringRecursive;