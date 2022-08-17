// DONE 1: Wrote a setTimeout() method in ES5 syntax which is executed after 1 second and prints the message "This is executed after 1 second." on the console.
setTimeout(function() {
    console.log("This is executed after 1 second.");    
}, 1000);

// DONE 2: Wrote a setTimeout() method in ES6 syntax which is executed after 2 seconds and prints the message "This is executed after 2 seconds." on the console.
setTimeout(() => {
    console.log("This is executed after 2 seconds.");
}, 2000);


// Custom Timer Function 

/**
* Function to start the timer and to print the value of the current time in the format hh:mm:ss
*/
const startTimer = () => {
    const now = new Date();
    const h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    m = prefixWithZero(m);
    s = prefixWithZero(s);
    console.log('Date = '+now.getDate());
    console.log("Current Time : "+h + ":" + m + ":" + s);
}

/**
* Function to print 0 in front of the numbers which are of single digit (0 - 9)
* @param {*} i minutes or seconds
*/
const prefixWithZero = (i) => {
    if (i < 10) {
        i = "0" + i
    };
    return i;
}

for (let i=0; i<3; i++) {
    setTimeout(startTimer, i*1000);
}