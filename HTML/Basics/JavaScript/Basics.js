function greet(name) {
    console.log(`Hello, ${name}`);
}

greet("Hardik");

let x ="Hardik";
var y ="Hardik";
const z ="Hardik";

let greeting = function (x = "default" ){
    console.log("Function as an Expression :"+ x);
};
greeting();
greeting(x);

var myArrow = (z = "default") => {
    console.log("Arrow Function : "+z);
}
myArrow(z);

let myArray = [];

//Callback Function

const myfunc = (callBack) =>{
    console.log("in main function");
    callBack();
};

const callBack = () => {
    console.log("in call back");
};

myfunc(callBack);