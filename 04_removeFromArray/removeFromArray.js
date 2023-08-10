const removeFromArray = function() {
    myArray = arguments[0];
    for (let i = 1; i < arguments.length; i++) { // loop through args
        argumentNow = arguments[i];
        argumentIndex = myArray.indexOf(argumentNow);
        if (argumentIndex > -1) {
            myArray.splice(argumentIndex, 1); // delete an element at the index if possible
        }
    }
    return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;
