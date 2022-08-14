// CASE A: When the promise is RESOLVED

// defining the promise object with the producer
let promiseObj = new Promise((resolve, reject) => {
    console.log("Getting name from DB...");
    setTimeout(() => {
        resolve("Srishti");
    }, 3000);
    
});

// defining the consumer
promiseObj.then(val => {
    console.log(`Name received from DB = ${val}`);
}, err => {
    console.log(`Error occurred = ${err}`);
});



// CASE B: When the promise is REJECTED

// defining the promise object with the producer
let promiseObj1 = new Promise((resolve, reject) => {
    console.log("Getting name from DB...");
    setTimeout(() => {
        reject(new Error("Error getting name!"));
    }, 3000);
    
});

// defining the consumer
promiseObj1.then(val => {
    console.log(`Name received from DB = ${val}`);
}, err => {
    console.log(`Error occurred = ${err}`);
});


/* 
You also broke a common illusion that resolve and reject are keywords in JavaScript. 
The fact is that they are NOT keywords. You can use any valid identifier in place of resolve & reject. 
It is just for the sake of understanding that we use these names.

Also, a very important point to be noted is that the order of the resolve and reject callback 
methods must remain the same. The first parameter of the producer code is always treated as the 
resolve() callback method which represents that the code executed successfully 
and the second parameter of the producer code is always treated as the reject() callback method 
which represents that the code encountered some error while in execution. 
You cannot reverse their order.
*/

/* 
The then() consumer has the following two arguments:

1.       successCallback()

invoked when the resolve() method is called and the promise is resolved
parameters of the successCallback hold the arguments passed into the resolve() callback

For example, if you invoke the following callback method in the producer code:
resolve(val);

Then, the following method, which is the first argument of the then() method is invoked:

successCallbackHandler(val)
 


2.       errorCallback()

invoked when the reject() method is called and the promise is rejected
parameters of the errorCallback hold the arguments passed into the reject() callback

For example, if you invoke the following callback method in the producer code:
reject(err);
 

Then, the following method, which is the first argument of the then() method is invoked:
errorCallbackHandler(err)
*/