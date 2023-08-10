const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arr) {
	let s = 0;
  for (let i = 0; i < arr.length; i++) {
    s += arr[i];
  }
  return s;
};

const multiply = function(arr) {
  let p = 1;
  for (let i = 0; i < arr.length; i++) {
    p *= arr[i];
  }
  return p;
};

const power = function(base, exponent) {
	let p = 1;
  while (exponent > 0) {
    p *= base;
    exponent -= 1;
  }
  return p;
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
