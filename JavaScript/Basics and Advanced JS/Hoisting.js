var side = 5;
console.log(calculateArea(side));
console.log(calculateVolume(side));

// Function to calculate area of a square
function calculateArea (side) {
    return side * side;
};

// Function to calculate volume of a square
var calculateVolume = function(side) {
    return side * side * side;
}

/* 
25
Uncaught TypeError: calculateVolume is not a function
*/

/* 
Feedback:
calculateArea() function is a normal function (defined with function keyword). In the case of a normal function, you can call the function before defining it. Thus, the first console.log() statement correctly prints the value 25 on the console.

However, in case of a function, which is assigned to a variable, the function cannot be called before it is defined. The compiler treats the above code snippet as:
*/

var calculateVolume;
var side = 5;
console.log(calculateArea(side));
console.log(calculateVolume(side));

// Function to calculate area of a square
function calculateArea (side) {
    return side * side;
};

// Function to calculate volume of a square
calculateVolume = function(side) {
    return side * side * side;
}

/* 
var calculateVolume;
var side = 5;
console.log(calculateArea(side));
console.log(calculateVolume(side));

// Function to calculate area of a square
function calculateArea (side) {
    return side * side;
};

// Function to calculate volume of a square
calculateVolume = function(side) {
    return side * side * side;
}
*/