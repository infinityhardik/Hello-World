var myName = {
    first : "Hardik",
    last : "Bhaavani"
}

console.log(myName.first);
// Example > console.log(myName.hello);
// This will work in JS but will show an error in TypeScript.

// TypeScript is a static type checker.
/* 
Detecting errors in code without running it is referred to as static checking. 
Determining what’s an error and what’s not based on the kinds of values being operated 
on is known as static type checking.

TypeScript checks a program for errors before execution, and does so based on the kinds of values, it’s a static type checker. For example, the last example above has an error because of the type of obj. Here’s the error TypeScript found:

const obj = { width: 10, height: 15 };
const area = obj.width * obj.heigth;
Property 'heigth' does not exist on type '{ width: number; height: number; }'. Did you mean 'height'?
*/

/* 
Therefore, write the code in TS first and then convert it to JS afterwards 
so as to get it running faster.
*/

