// Difference in the way of defining the Consumer part of the Code (i.e., the .then() method) of Promises.
// The Producer code remains the same.


// defining the async function which waits for the promise to be resolved / rejected
const getName = async () => {
    try {
        let name = await namePromise;
        console.log(`Name received from DB = ${name}`);
    } catch (err) {
        console.log(err);
    }
}

// defining the promise object with the producer
let namePromise = new Promise((resolve, reject) => {
    console.log("Getting name from DB...");
    setTimeout(() => {
        resolve("Srishti");
        // reject(new Error("Error getting name!"));
    }, 3000);
});

getName();

/* 
When the promise is resolved, the result passed in as an argument while 
invoking the resolve() callback method is contained inside the variable which holds the 
result of the promise, which is waited for. 
In this case, the variable name will hold the result when the namePromise is resolved.
*/

/* 
When the promise is rejected (or if an error occurred in the producer code) in the try block, 
the control goes to the catch block and the code inside it is executed.
*/





// Example 2 :

/* DONE 1: Created a promise with the producer code which gets the email given in the question from the server
Mock this functionality of getting email from server using a setTimeout() method which returns this email after 2 seconds as the response from the server.
*/
let emailPromise = new Promise((resolve, reject) => {
    console.log("Getting email from server...");
    setTimeout(() => {
        // DONE 2: Inside the producer code, invoked the resolve() callback while passing in the email given in the question as the argument
        resolve('hello@hello.com');
    }, 2000);
});



// DONE 3: Defined an async function which has the try and catch blocks
const getEmail = async () => {
    try {
        // DONE 4: Inside the try block, waited for the promise defined above using the await keyword and hold the email returned by the promise in a variable and printed the value inside this variable on the console in the format given in the question
        const email = await emailPromise;
        console.log(`Email = ${email}`);
    } catch(err) {
        // DONE 5: Inside the catch block, logged on to console the error(s) received, if any (this won't be true for the current case since we are resolving the promise)
        console.log(err);
    }
} 

// DONE 6: Invoked the async function defined earlier
getEmail();