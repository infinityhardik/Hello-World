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