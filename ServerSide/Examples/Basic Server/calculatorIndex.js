// 1. import all the functions from calculator file with exact same name.
const { add, subtract, multiply, divide } = require("./calculator");

// Don't change below code
function showResults() {
  console.log(add(5, 4));
  console.log(subtract(6, 4));
  console.log(multiply(10, 3));
  console.log(divide(27, 9));
}
showResults();

module.exports = showResults;

// Basics of Import - Export