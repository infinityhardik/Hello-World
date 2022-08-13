const getDetails = (callback) => {
    setTimeout(() => {
        let details = {
            firstName: "Hardik",
            lastName: "Bhaavani",
            gender: "male"
        }
        
        callback(details);
    }, 2000);
}

const printDetails = (details) => {
    for (let key in details) {
        console.log(`${key} : ${details[key]}`);
    }
}

getDetails(printDetails);




// Anonymous INLINE function passed as an argument to another function:
let add = (callback) => {
    let x = 2, y = 3;
    console.log("Sum :", x + y);
    callback();
}

add(function() {
    console.log("Finished this operation!");
});

const subtract = (callback) => {
    let x = 2, y = 3;
    console.log("Difference :", x - y);
    callback();
}

subtract(function() {
    console.log("Finished this operation!");
});




// Anonymous INDEPENDENT function and passed in as an argument to another function. 
let add1 = (callback) => {
    let x = 2, y = 3;
    console.log("Sum :", x + y);
    callback();
}

const subtract1 = (callback) => {
    let x = 2, y = 3;
    console.log("Difference :", x - y);
    callback();
}

const displayCompletion = () => {
    console.log("Finished this operation!");
}

add1(displayCompletion);
subtract1(displayCompletion);




// With Arguments

let getName = (cb) => {
    let name;
    // mocking get name from DataBase
    setTimeout(() => {
        name = "Hardik";
        cb(name);
    }, 2000);
}

let greet = (nameVal) => {
    console.log(`Hello ${nameVal}`);
}

getName(greet);


// Example Mocking of Callback with parameters and arguments
// DONE 1: Wrote a function to create an order ID in the DB. You can mock this functionality by using a setTimeout() method which, after 2 seconds, assigns a value 101 to the order ID.
let createOrder = (callback) => {
    let orderId = null;
    // creating an order in DB
    setTimeout(() => {
        orderId = 101;
        callback(orderId);
    }, 2000);
}

// DONE 2: Wrote a callback function which prints the order ID to the console in this format: Order placed successfully with order ID = 101.
let printOrderDetails = (orderId) => {
    console.log(`Order placed successfully with order ID = ${orderId}.`);
}

// DONE 3: Invoked first function while passing in the callback function.
createOrder(printOrderDetails);