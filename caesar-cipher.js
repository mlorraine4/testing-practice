function caesarCipher(string, shift) {
    let cipher = "";
    for (i=0; i<string.length; i++) {
        let x = string.charCodeAt(i);
        let encrypt = x + shift;
        cipher += String.fromCharCode(encrypt);
    }
    return cipher;
}

console.log(caesarCipher("Hello!", 10));

module.exports = caesarCipher;