/* 
WAY 1:

Define a then() method with only TWO arguments – first as the successCallbackHandler and the second as the errorCallbackHandler.
NO need to define the catch() method.

The then() method will be used to handle both - the success as well as the error(s).



.then(successCallback, errorCallback)


WAY 2:

Define a then() method with only ONE argument as the successCallbackHandler.
DEFINE a catch() method with one argument as errorCallbackHandler.

The then() method will handle the success whereas the catch() method will handle the error(s).


.then(successCallback)
.catch(errorCallback)
*/



// WAY 1 :

// defining the promise object with the producer
let promiseObj = new Promise((resolve, reject) => {
    console.log("Getting name from DB...");
    setTimeout(() => {
        resolve("Srishti");
        // reject(new Error("Could not get the name from DB!"));
    }, 3000);
    
});

// defining the consumer - then() method
promiseObj.then(val => {
    console.log(`Name received from DB = ${val}`);
}, err => {
    console.log(`Error occurred = ${err}`);
});





// WAY 2 :

// defining the promise object with the producer
let promiseObj2 = new Promise((resolve, reject) => {
    console.log("Getting name from DB...");
    setTimeout(() => {
        resolve("Srishti");
        // reject(new Error("Could not get the name from DB!"));
    }, 3000);
    
});

// defining the consumer - then() method
promiseObj2.then(val => {
    console.log(`Name received from DB = ${val}`);
});

// defining the consumer - catch() method
promiseObj2.catch(err => {
    console.log(`Error occurred = ${err}`);
});














// Example Code

/**
* Function to check whether the given email is valid or not
* Prints "VALID Email" if the email is valid; prints "INVALID Email" if the email is invalid
* @param {*} email 
*/
const isValid = email => {
    const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    console.log(regex.test(String(email).toLowerCase()) ? "VALID Email!" : new Error("INVALID Email!"));
}

/* DONE 1: Created a promise with the producer code which gets the given email in the question from the server
Mock this functionality of getting email from server using a setTimeout() method which returns this email after 2 seconds as the response from the server.
*/
let promiseObj3 = new Promise((resolve, reject) => {
    let email = null;
    setTimeout(() => {
        email = "srishti.gupta@upgrad.com"
        // DONE 2: Inside the producer code, invoked the resolve() callback while passing in the given email in the question as the argument
        resolve(email);
    }, 2000);
});

// DONE 3: Defined the consumer(s) using either of the two approaches
promiseObj3.then((email) => {
    // DONE 4: Printed the email received from the producer code while resolving the promise in the format given in the question
    console.log(`Email = ${email}`);
    // DONE 5: If the promise is resolved (meaning that the email was fetched from the server successfully), invoked the isValid() method (given above) to print whether the received email is valid or not
    isValid(email);
}).catch((err) => {
    console.log(err);
});