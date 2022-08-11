/**
* Function to print the order summary with the given customer and order details 
*/
const printOrderSummary = () => {
    // TODO: Rewrite the message given below using template literals (template strings)
    let message = "Hi " + customer.firstName + " " + customer.lastName + "! Your order for " + order.items.length + " items has been successfully placed. Thank you!";
    console.log("ES5 Notation : ");
    console.log(message);
    
    let message1 = `Hi ${customer.firstName} ${customer.lastName}! Your order for ${order.items.length} items has been successfully placed. Thank you!`;
    console.log("ES6 Notation : ");
    console.log(message1);
}

// object consisting details of the customer
const customer = {
    firstName: "Hardik",
    lastName: "Bhaavani",
    gender: "male"
};

// object consisting details of the order
const order = {
    id: "SG101",
    amount: 950,
    items: ["Apparel", "Shoes", "Bag"]
}

printOrderSummary(customer, order);