var counter = function(arr){
  return "There are " + arr.length + " elements in this array";
};

// module.exports.adder = function(a, b){
//   return `The sum of the 2 numbers is ${a + b}`
// }

var adder = function(a, b){
  return `The sum of the 2 numbers is ${a + b}`
}

var subtractor = function(num1, num2){
  return `${num1} minus ${num2} equals ${num1 - num2}`;
}

function multiplier(numb1, numb2){
  return `${numb1} multiplied by ${numb2} equals ${numb1 * numb2}`;
}

//TEMPLATE STRING USES THE BACK TICKS LIKE THE EXAMPLE ABOVE. This Allows us to embed variables or expressions without requiring concactenation.
//EMBEDDING A VARIABLE ${}

var pi = 3.142;

// module.exports.counter = counter;
// module.exports.pi = pi;
// module.exports.subtractor = subtractor;
// module.exports.multiplier = multiplier;

module.exports = {
  counter : counter,
  adder : adder,
  subtractor : subtractor,
  multiplier : multiplier,
  pi : pi
}
