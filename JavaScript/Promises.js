// Resolve & Reject is a Callback 
// Promise is in itself a Callback Function 
// Check > new Promise ((res, rej)=>{}); This makes the producer code call implicitly upon object creation.
// res and rej are parameters to the function above.


// Resolving a promise
promiseObj = new Promise((resolve, reject) => {
    console.log("Getting name from DB...");
    setTimeout(() => {
        resolve("Srishti");
    }, 3000);
});

console.log(promiseObj);


// Rejecting a promise
let promiseObj = new Promise((resolve, reject) => {
    console.log("Getting name from DB...");
    setTimeout(() => {
        reject(new Error("Could not get the name from DB!"));
    }, 3000);
});

console.log(promiseObj);


// Doing both Resolve and Reject 
promiseObj = new Promise((resolve, reject) => {
    console.log("Getting name from DB...");
    setTimeout(() => {
        resolve("Srishti");
        // Only the First Callback written will be executed and the control comes out of the promise object.
        
        reject(new Error("Could not get the name from DB!"));
        // Reject Callback will not get executed as it is second callback and the control is already out.
        
    }, 3000);
});