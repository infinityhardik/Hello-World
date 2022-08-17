// Callback Hell Example

const getAddress = () => {
    getContinents(continent => {
        getCountries(continent, country => {
            getStates(country, state => {
                getCities(state, () => {
                    done();
                });
            });
        });
    });
};

const getContinents = callback => { // callback = getCountries()
    setTimeout(() => {
        // code to get all continents
        let continent = "Asia";
        console.log(continent);
        callback(continent);
    }, 1000);
};

const getCountries = (continent, callback) => { // callback = getStates()
    setTimeout(() => {
        // code to get all countries
        let country = "India";
        console.log(country);
        callback(country);
    }, 1000);
};

const getStates = (country, callback) => { // callback = getCities()
    setTimeout(() => {
        // code to get all states
        let state = "Rajasthan";
        console.log(state);
        callback(state);
    }, 1000);
};

const getCities = (state, callback) => { // callback = done()
    setTimeout(() => {
        // code to get all cities
        let city = "Jaipur";
        console.log(city);
        callback();
    }, 1000);
};

const done = () => {
    console.log("DONE!");
};

getAddress();



// CALLBACK HELL
// function to fetch details of user in Student Management System

/* 
const fetchUserDetails = (username, password, callback) => {
    database.authenticateUser(username, password, (error, userInfo) => {
        if (error) {
            callback(error);
        } else {
            database.getRoles(userInfo, (error, rolesInfo) => {
                if (error) {
                    callback(error);
                } else {
                    database.getPermissions(rolesInfo, (error, permissionsInfo) => {
                        if (error) {
                            callback(error);
                        } else {
                            callback(null, userInfo, rolesInfo, permissionsInfo);
                        }
                    });
                }
            });
        }
    });
}

const callback = (error, userInfo, rolesInfo, permissionsInfo) => {
    // some code here
}
*/

// Note that the above code will not run as it is because there is no database object yet 
// on which you can invoke the specified methods. It is just an overview of how a small application can be defined.


// Example 2 :-
/*
DONE 1: 
A. Defined a function with identifier getUsername
B. Inside this function, printed the message "Getting username..." to the console
C. Wrote a setTimeout() function with a delay of 3 seconds to mock getting the username from the user
(assigned value "srishti" to the username variable inside the setTimeout() function)
D. Printed the username to the console, as shown in the Problem Statement
E. Called the callback function validateUsername() while passing in the username as the argument to it
*/
/**
* Function to get the username from the database
* @param {*} callback function to be called after getting the username (validateUsername() function)
*/
const getUsername = (callback) => {
    console.log("Getting username...");
    // code to get the username
    setTimeout(() => {
        const username = "srishti";
        console.log("Username = " + username);
        callback(username);
    }, 3000);
}


/*
DONE 2: 
A. Defined a function with identifier validateUsername
B. Inside this function, printed the message "Validating username..." to the console
C. Validated the username passed to this function as the argument
(A username is VALID when it is not undefined and null and an empty string)
D. If the username is valid, printed the message "Valid Username!" on the console and called the callback function passed in the argument
E. If the username is not valid, printed the message "Invalid Username! Please try again!"
*/
/**
* Function to validate the username
* @param {*} username the username which is to be checked as valid or invalid
* @param {*} callback function to be called if the username is valid
*/
const validateUsername = (username, callback) => {
    console.log("Validating username...");
    // if the username is not undefined or null or empty string, call the getPassword() function
    if (username !== undefined && username !== null && username !== "") {
        console.log("Valid Username!");
        callback();
    } else {
        console.log("Invalid Username! Please try again!");
    }
}


/*
DONE 3: 
A. Defined a function with identifier getPassword
B. Inside this function, printed the message "Getting password..." to the console
C. Wrote a setTimeout() function with a delay of 3 seconds to mock getting the password from user
(assigned value "upgrad" to the password variable inside the setTimeout() function)
D. Printed the password to the console, as shown in the Problem Statement
E. Called the callback function validatePassword() while passing in the password as the argument to it
*/
/**
* Function to get the password from the database
* @param {*} callback function to be called after getting the password (validatePassword() function)
*/
const getPassword = (callback) => {
    console.log("Getting password...");
    // code to get the password
    setTimeout(() => {
        const password = "upgrad";
        console.log("Password = " + password);
        callback(password);
    }, 3000);
}


/*
DONE 4: 
A. Defined a function with identifier validatePassword
B. Inside this function, printed the message "Validating password..." to the console
C. Validated the password passed to this function as the argument
(A password is VALID when it is not undefined and null and an empty string)
D. If the password is valid, printed the message "Valid Password!" on the console and called the callback function passed in the argument
E. If the password is not valid, printed the message "Invalid Password! Please try again!"
*/
/**
* Function to validate the password
* @param {*} password the password which is to be checked as valid or invalid
* @param {*} callback function to be called if the password is valid
*/
const validatePassword = (password, callback) => {
    console.log("Validating password...");
    // if the password is not undefined or null or empty string, call the done() function
    if (password !== undefined || password !== null || password !== "") {
        console.log("Valid Password!");
        callback();
    } else {
        console.log("Invalid Password! Please try again!");
    }
}


/*
DONE 5: Defined a function with identifier done which logs the message "BOTH VALID" on the console
*/

/**
* Function which is called when both the username as well as password are valid
*/
const done = () => {
    console.log("BOTH VALID!");
}


/*
DONE 6: 
A. Defined a function with identifier login
B. Inside the login() function, called the getUsername() function
C. Passed validateUsername() function with username argument as the callback function inside the getUsername() function
D. Passed getPassword() function as the callback function inside the validateUsername() function
E. Passed the validatePassword() function with password argument as the callback function inside the getPassword() function
F. Passed the done() function as the callback function inside the validatePassword() function
*/
/**
* Function for logging into a website
*/
const login = () => {
    getUsername((username) => {
        validateUsername(username, () => {
            getPassword((password) => {
                validatePassword(password, () => {
                    done();
                });
            });
        });
    });
}

login();