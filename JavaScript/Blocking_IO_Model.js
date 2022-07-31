//Run Code Block in Console of Browser

// Blocking I/O Model : >> Completed in 2s + 4s = 6s

const foo = () => setTimeout(() => console.log('Inside foo!'), 2000);

const bar = () => setTimeout(() => console.log('Inside bar!'), 4000);

foo();
bar();

// Non-Blocking I/O Model : >> Completed in 2s Max

/**
* OPERATION 1
* Function to get the user name from the server
*/
const getUserName = () => {
    let name = null;
    setTimeout(() => {
        name = 'Srishti';
        console.log(name);
    }, 2000);
}

/**
* OPERATION 2
* Function to get the past orders from the server
*/
const getPastOrders = () => {
    let orderDetails = null;
    setTimeout(() => {
        orderDetails = {
            orderId: '101',
            amount: 500,
            discount: 50
        }
        console.log(orderDetails);
    }, 2000);
}

getUserName();
getPastOrders();

// NON-BLOCKING I/O model :

const foo1 = () => setTimeout(() => console.log('Inside foo!'), 2000);

const bar1 = () => setTimeout(() => console.log('Inside bar!'), 4000);

foo1();
bar1();

/* Answer :-

At 2s:
Inside foo!
At 4s:
Inside bar!

✓ Correct
Feedback:
As per the code provided in the question, both the functions foo and bar consist of asynchronous functions. In the blocking I/O model, the code following the blocking code can be executed even when the blocking code has not yet finished its execution. Thus, the function foo will not block the function bar from getting executed. 

At 0s, the function foo will start its execution. At 0s, the function bar also starts its execution.
After 2s, the asynchronous setTimeout() function inside the function foo finishes its execution, and then, its callback will be executed, which prints the message ‘Inside foo!’ on the screen.
By now, 2s have elapsed (current time is 2s), and thus, only 2 more seconds are left for the function bar to finish its execution. After 2 more seconds elapse from the current time (2s), the resultant time becomes 2s + 2s = 4s. At this time, the setTimeout() function inside the bar function finishes its execution and its callback is invoked. This callback then prints the message ‘Inside bar!’ on the screen. 

Thus, this option is the correct choice. */