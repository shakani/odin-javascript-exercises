const repeatString = function(inputString, nRepetitions) {
    if (nRepetitions >= 0) {
        return inputString.repeat(nRepetitions);
    }
    else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = repeatString;
