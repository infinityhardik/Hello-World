const arr = [
  "Hey John",
  "JavaScript is Fun",
  "Hello, World this is JavaScript",
];

/* Don't change above array */
// 1. Print elements of the array in console

function printArray() {
  arr.forEach((element) => {
    console.log(element);
  });
}

printArray();
module.exports = printArray;
