function add(a, b){
    return parseInt(a, 10) + parseInt(b, 10);
}

function subtract(a, b){
    return parseInt(a, 10) - parseInt(b, 10);
}

function multiply(a, b){
    return parseInt(a, 10) * parseInt(b, 10);
}

function divide(a, b){
    return parseInt(a, 10) / parseInt(b, 10);
}

module.exports = { add, subtract, multiply, divide };