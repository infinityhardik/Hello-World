var loadImage1 = new Promise(function (resolve, reject) {
    console.log("Example 1: Loading image...");
    setTimeout(function () {
        var imageUrl = "Desktop/image.png";
        resolve();
    }, 2000);
});

loadImage1.then(function () {
    console.log("Image loaded successfully!");
}, function (error) {
    console.log(new Error(error));
});

var loadImage2 = new Promise(function (resolve, reject) {
    console.log("Example 2: Loading image...");
    setTimeout(function () {
        var imageUrl = "Desktop/image.png";
        reject(new Error("Error in loading image!"));
    }, 2000);
});


/* 

Output :

Example 1: Loading image...
Example 2: Loading image...
Image loaded successfully!
Uncaught (in promise) Error: Error in loading image!

✓ Correct
Feedback:
The code snippet in example 1 defines a new promise. 
In the executor, a setTimeout() function is called, which is moved to the queue. 
Meanwhile, the next statement is executed. 
The next block defines the callbacks for the loadImage1 promise. 
So, this is also skipped for now. In the next block, the code snippet for example 2 is written. 
Inside the executor for loadImage2 promise, the statement “Example 2: Loading image…” is printed on the console. 
The next statement calls a setTimeout() function, which is again moved to the queue. 
Now, after 2 seconds, the setTimeout() function of example 1 is resolved. 
This makes the control go to the success callback in loadImage1.then() method. 
When 2 seconds for the second setTimeout() function are over, the loadImage2 promise is rejected 
while creating a new error, which loads the message “Error in loading image!”. 
*/