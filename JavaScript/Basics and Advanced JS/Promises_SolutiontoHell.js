const getAddress = () => {
    getContinents.then(continent => {
        return getCountries(continent);
    }, error => {
        console.log(new Error(error));
    }).then(country => {
        return getStates(country);
    }, error => {
        console.log(new Error(error));
    }).then(state => {
        return getCities(state);
    }, error => {
        console.log(new Error(error));
    }).then(() => {
        return done();
    }, error => {
        console.log(new Error(error));
    });
}

const getContinents = new Promise((resolve, reject) => {
    setTimeout(() => {
        // code to get all continents
        let continent = "Asia";
        console.log(continent);
        resolve(continent);
    }, 1000);
});

const getCountries = (continent) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // code to get all countries
            let country = "India";
            console.log(country);
            resolve(country);
        }, 1000);
    });
}

const getStates = (country) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // code to get all states
            let state = "Rajasthan";
            console.log(state);
            resolve(state);
        }, 1000);
    });
}

const getCities = (state) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // code to get all cities
            let city = "Jaipur";
            console.log(city);
            resolve();
        }, 1000);
    });
}

const done = () => {
    console.log("DONE!");
};

getAddress();


/* 
Clearly, following are the advantages of using promises:

Improved code readability
Better error handling
Neater way of defining flow of logic control
Reducing inter-dependency of code (coupling)
*/




















// Example 2 :

/* DONE: Converted the given callback chain into promises and rewritten all the code accordingly
NOTES: A. All the identifiers remain constant.
B. The entire logic remains as it is.
*/

/**
* Function to get the username from the database
* @param {*} callback function to be called after getting the username (validateUsername() function)
*/
const getUsername = new Promise((resolve, reject) => {
    console.log("Getting username...");
    // code to get the username
    setTimeout(() => {
        const username = "srishti";
        console.log("Username = " + username);
        resolve(username);
    }, 3000);
});


/**
* Function to validate the username
* @param {*} username the username which is to be checked as valid or invalid
* @param {*} callback function to be called if the username is valid
*/
const validateUsername = (username) => {
    return new Promise((resolve, reject) => {
        console.log("Validating username...");
        // if the username is not undefined or null or empty string, call the getPassword() function
        if (username !== undefined && username !== null && username !== "") {
            console.log("Valid Username!");
            resolve();
        } else {
            reject("Invalid Username! Please try again!");
        }
    });
}


/**
* Function to get the password from the database
* @param {*} callback function to be called after getting the password (validatePassword() function)
*/
const getPassword = () => {
    return new Promise((resolve, reject) => {
        console.log("Getting password...");
        // code to get the password
        setTimeout(() => {
            const password = "upgrad";
            console.log("Password = " + password);
            resolve(password);
        }, 3000);
    });
}


/**
* Function to validate the password
* @param {*} password the password which is to be checked as valid or invalid
* @param {*} callback function to be called if the password is valid
*/
const validatePassword = (password) => {
    return new Promise((resolve, reject) => {
        console.log("Validating password...");
        // if the password is not undefined or null or empty string, call the done() function
        if (password !== undefined || password !== null || password !== "") {
            console.log("Valid Password!");
            resolve();
        } else {
            reject("Invalid Password! Please try again!");
        }
    });
}


/**
* Function which is called when both the username as well as password are valid
*/
const Done = () => {
    console.log("BOTH VALID");
};


/**
* Function for logging into a website
*/
const login = () => {
    getUsername.then((username) => {
        return validateUsername(username);
    }, (error) => {
        console.log(new Error(error));
    }).then(() => {
        return getPassword();
    }, (error) => {
        console.log(new Error(error));
    }).then((password) => {
        return validatePassword(password);
    }, (error) => {
        console.log(new Error(error));
    }).then(() => {
        return Done();
    }, (error) => {
        console.log(new Error(error));
    });
};

login();