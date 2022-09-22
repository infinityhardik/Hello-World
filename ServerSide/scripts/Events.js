// console.log("Hi, Hardik > This is to check whether the server is working ");

const EventEmitter = require('events');
const customEvent = new EventEmitter();
// customEvent is object of EventEmitter Class.

// Events are similar to FrontEnd Events like onClick, onMouseEnter, etc.

// customEvent.emit('DataReceived');
// This emit will not Trigger because no such Event is Defined.

customEvent.on('DataReceived', () => {
    // DataReceived is an Event Name
    // What to do when Event is Triggered 
    console.log('Data Received Successfully');
})

customEvent.on('DataReceived', () => {
    // DataReceived is an Event Name
    // What to do when Event is Triggered 
    console.log('Data Received Successfully, Multiple Callback Executed Synchronously > i.e., Line by Line');
})

customEvent.on('DataReceived', (name, id) => {
    // Name and Id are parameters
    console.log(`Data Received Successfully for ${name} with ID : ${id}`);
})

// For Triggering Event we use emit method()
customEvent.emit('DataReceived');
customEvent.emit('DataReceived', 'Hardik', 1);