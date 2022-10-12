const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const data = [];

app.get('/form', (req, res) => {
    /*ToDo 1: Send the index.html using sendFile method*/
    res.sendFile(__dirname + '/dataCapture.html');
});

app.post('/form', (req, res) => {
    /*ToDo 2: Get the firstName and lastName from the request body, if any of the variable is not present return
              404 status*/
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    console.log(firstName, lastName);


    if (firstName === undefined || lastName === undefined || firstName === '' || lastName === '') {
        console.log("400 Response sent");
        res.status(400).send('Incomplete Data');
    } else {
        let flag = false;
        /*ToDo 3: Check whether the firstname and lastname already exists in the data array object, if it exist return 'Hello Again' text as response*/
        let result = data.filter(item => {
            if (item.firstName == firstName && item.lastName == lastName) {
                flag = true;
                return item;
            }
        });
        /*ToDo 4: Create an object with properties firstName and lastName and assign the firstName and lastName value to the property and push the object
                  to the data array and respond with `Hello ${firstName} ${lastName}`*/
        if (flag) {
            return res.send('Hello Again');
        } else {
            let obj = { firstName: firstName, lastName: lastName };
            data.push(obj);

            console.log('Array =>' + data);
            res.send(`Hello ${firstName} ${lastName}`);
        }
    }
});

app.listen(port);

/*Export the app using modules.export */
module.exports = app;
