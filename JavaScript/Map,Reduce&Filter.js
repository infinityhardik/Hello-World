var input = [189.45, 12.89, 7.43, 167.98, 767.78, 23.89, 990.67, 289.7, 44.56, 97.65, 2345.87, 665.43, 7221.89, 58843.21];
var output = input.map(function(x){ return x * 100});
console.log(output);
//Returns a New Array with proper numbers.

var input = [23,45,678,90,33,21,780,670,498,7493,58940,6565,900,370,1299,1300]
var output = input.filter(function(x){ return x % 10 == 0}); 
console.log(output);
//Returns the numbers divisible by 10.

var input = [234, 567, 273, 456, 598, 635, 644, 718, 750, 753, 801]
var output = input.reduce(function(sum, currentValue){ return sum + currentValue});
console.log(output);
//Returns the sum of the array.
// function(x = accumulator, y = current value from second element)