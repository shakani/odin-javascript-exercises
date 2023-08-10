const palindromes = function (inputWord) {
    inputWord = inputWord.toLowerCase().replace(/\W/g, ''); // strip to alphanumeric
    let l = inputWord.length - 1;
    for (let i = 0; i < l; i++) {
        if (inputWord[i] != inputWord[l-i]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
