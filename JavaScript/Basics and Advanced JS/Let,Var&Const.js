/**
* Function to calculate amount for the item pen
* @param {*} quantity number of pens to be purchased
*/
function calculateAmount(quantity) {
    /* TODO 1: Write all your code inside this function
    The price is always fixed to Rs. 10.
    Assume the quantity to be 5.
    */
    const price =10;
    
    // TODO 2: Return the amount to be paid by the customer
    return price*quantity;
}

/**
* Function to show the amount payable on the console
* @param {*} amount total amount to be paid
*/
function showAmount(amount) {
    // TODO 3: Log the given message to the console here
    console.log("Total amount to be paid = Rs. "+amount);
    
}

/* TODO 4: Call the function calculateAmount() while passing the quantity of pens as an argument
and
Call the function showAmount() while passing the result (amount) of the function calculateAmount() as its argument
*/

showAmount(calculateAmount(5));