// Set TimeOut Function mocks the Server Request.

async function getAddress() {
    country = await getCountries();
    state = await getStates(country);
    city = await getCity(state);
    done();
}

const getCountries = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let country = 'India';
            console.log(country);
            resolve(country);
        })
    })
}

const getStates = (country) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let state = 'Gujarat';
            console.log(state);
            resolve(state);
        })
    })
}

const getCity = (state) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let city = 'Rajkot';
            console.log(city);
            resolve(city);
        })
    })
}

const done = () => {
    console.log('Done!');
}

getAddress();


// Example to Demonstrate Async and Await Functions.