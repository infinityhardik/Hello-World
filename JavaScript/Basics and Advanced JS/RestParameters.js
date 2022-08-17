/* TODO: Define a function with identifier calculateSumAfterTax
This function calculates the sum of all the prices after applying given tax on each price. 
*/
//...args is the Rest Parameters


function calculateSumAfterTax(tax, ...args){
    let ans = args.map(function(item){
        return item+(item*tax/100);
    });
    console.log(ans);
    let s = ans.reduce(function(x,y){
        return x+y;
    });
    
    return s;
}

// Printing the sum of all the prices - 10, 20, and 30 after tax of 10% (first argument) is applied on each of the prices (subsequent parameters)
console.log(calculateSumAfterTax(10, 10, 20, 30));


/* 
OR Sample Solution
*/

/* DONE: Defined a function with identifier calculateSumAfterTax
This function calculates the sum of all the prices after applying given tax on each price
*/
const calculateSumAfterTax = (tax, ...prices) => {
    let sum = 0;
    prices.forEach(p => sum += p + (p * tax)/100);
    return sum;
}

// Printing the sum of all the prices - 10, 20, and 30 after tax of 10% (first argument) is applied on each of the prices (subsequent parameters)
console.log(calculateSumAfterTax(10, 10, 20, 30));