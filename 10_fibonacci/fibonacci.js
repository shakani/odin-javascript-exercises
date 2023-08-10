const fibonacci = function(n) {
    if (n < 2) {
        return 1;
    }
    else {
        let a = 1; let b = 1; // fibonacci seeds
        let temp = 0; // temporary container
        while (n > 2) {
            // a, b = b, a+b
            temp = a;
            a = b;
            b += temp;
            n -= 1;
        }
        return b;
    }
};

// Do not edit below this line
module.exports = fibonacci;
