// CASE: When the promise is REJECTED

// defining the promise object with the producer
let promise = new Promise((resolve, reject) => {
    console.log("Getting name from DB...");
    setTimeout(() => {
        reject(new Error("Could not get the name from DB!"));
    }, 3000);

});

// defining the consumer
promise.catch(err => {
    console.log(`Error occurred = ${err}`);
});

// OR it can be written as following for One Parameter only in an Arrow Function in ES6 Syntax.

// promise.catch( (err) => {
//     console.log(`Error occurred = ${err}`);
// });




/* 
Note that the control will not go inside the catch() method 
if there is no error in the producer code or the promise is not rejected.



Syntax of catch() method:

// writing the callback
promiseObj.catch((parametersToHoldArgumentsPassedWhenPromiseIsRejected) => {
// code to execute when promise is rejected
});
 

Now, simplifying the parameters of the errorCallback handler will reduce the above syntax to the following:

Syntax of catch() method:

promiseObj.catch((err) => {
    // code to be executed when promise is rejected
});
 

Note that in the above code, only one parameter named err is written in the errorCallback. However, you can have any number of parameters as you want and you can name them with any valid identifier because these are just the callback methods and their syntax is similar to a normal method.

 

Following is the summary of what you learned till now in the above video:
 

The catch() consumer has only one argument.

 

errorCallbackHandler()

invoked when the reject() method is called and the promise is rejected
parameters of the errorCallbackHandler hold the arguments passed into the reject() callback
 
For example, if you invoke the following callback method in the producer code:

reject(err);
 

Then, the following method, which is the argument of the catch() method is invoked:

errorCallbackHandler(err)
*/