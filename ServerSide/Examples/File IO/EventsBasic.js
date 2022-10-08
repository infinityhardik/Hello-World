// TODO 1: Import the events module
const EventEmitter = require('events');
class MyEmitter extends EventEmitter { }
const myEmitter = new MyEmitter();

// TODO 2: Create an object of EventEmitter class

// TODO 3: Bind an event named 'sum' to this object. The listener function associated with it should calculate the sum of two numbers and print it on the console.
/**
 * Function as event handler of the 'sum' event to print sum of two given numbers
 * @param {Number} number1 - first number
 * @param {Number} number2 - second number
 */
myEmitter.on('sum', (number1, number2) => console.log(number1 + number2));

// TODO 4: Fire an event and pass two arguments number1 and number2 to the listener function
myEmitter.emit('sum', 1, 2);