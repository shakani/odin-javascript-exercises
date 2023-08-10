const sumAll = function(nStart, nEnd) {
    // Edge cases
    if(nStart > nEnd) {
        return sumAll(nEnd, nStart)
    }
    else if (nStart < 0 || typeof(nStart) != 'number' || typeof(nEnd) != 'number'){
        return 'ERROR';
    }

    /* 
    if we to sum from nStart to nEnd, we have
    Total = nStart + (nStart + 1) + (nStart + 2) + ... (nStart + (nEnd - nStart))
    Note that Total = [(nEnd - nStart + 1) * nStart] + (sum from 1 to (nEnd - nStart))
    The latter sum is just (nEnd - nStart)(nEnd - nStart + 1)/2

    Let range = nEnd - nStart so that
    Total = [range + 1] * nStart + (range)(range + 1)/2
          = (range+1)(nStart + range/2)
    */
   let range = nEnd - nStart;
   return ((range + 1)*nStart) + (range * (range+1))/2;
};

// Do not edit below this line
module.exports = sumAll;
