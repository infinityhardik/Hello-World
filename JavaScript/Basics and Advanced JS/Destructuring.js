/**
* Function to greet the user with his/her first name and last name
* @param {*} person 
*/
const greetUser = (person) => {
    // TODO: Use spread operator to get the values of the keys - firstName and lastName with alias names fn and ln respectively
    const { firstName : fn, lastName : ln } = person;
    console.log("Hello " + fn + " " + ln + "!");
}

// object for a person
const person = {
    firstName: "Hardik",
    lastName: "Bhaavani",
    nationality: "Indian",
    gender: "male"
};

greetUser(person);


// This was Object Destructuring.

// Below is Array Destructuring.

const mobile = ['91', '99999', '888888'];

const [countryCode, ,subscriber] = mobile;
console.log(countryCode); 
console.log(subscriber); 