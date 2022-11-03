const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(x) {
  let sum = 0;
	for(let i = 0; i < x.length; i++) {
    sum += x[i];
  }

  return sum;
};

const multiply = function(x) {
  let mul = 1;
	for(let i = 0; i < x.length; i++) {
    mul *= x[i];
  }

  return mul;
};

const power = function(x, y) {
	return x ** y;
};

const factorial = function(n) {
	var fact = 1; 
	for (let i = 1; i <= n; i++) {
		fact *= i; 
	}
	return fact;
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
