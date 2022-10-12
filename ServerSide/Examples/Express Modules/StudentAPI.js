const { students } = require('./studentData.js');
const express = require('express');

const app = express();
const port = 3000;

app.get('/api/students', (req, res) => {
    /*ToDo 1: Return the students array which is imported from data.js file*/
    res.send(students);
});

app.get('/api/students/:name', (req, res) => {
    /*ToDo 2: Get the name from the request params and check whether the name is available in student array, if it
              is present return the student object else return status of 404*/
    let { name } = req.params;
    console.log(name);
    let result = students.filter(item => item.name.toLowerCase() === name.toLowerCase());
    console.log(result);
    if (result) {
        res.send(result);
    } else {
        res.status(404);
    }
});

app.get('/api/student', (req, res) => {
    /*ToDo 3: Get the field1 and field2 value from request query, if any of the field is not present return status 400, 
              check whether the field2 value has a property in student object and assign it to a variable, if field2 value
              is not present in student object return status 400*/
    let field1 = req.query.field1;
    let field2 = req.query.field2.toLowerCase();
    console.log(field1, field2);

    if ((field1 === null || field1 === undefined) && (field2 === null || field2 === undefined)) {
        res.status(400).send('Not Found');
    }
    /*ToDo 4: If the field1 value is topper return the object which has the highest field2 value else 
              if the field1 value is lowest return the object which has the least field2 value*/
    if (field1 == 'topper') {
        let result = students[0];
        let test = students.filter(item => {
            if (item[field2] >= result[field2]) {
                result = item;
            }
        });

        console.log(result);
        res.send(result);
    } else if (field1.toLowerCase() === 'lowest') {
        let result = students[0];
        let test = students.filter(item => {
            if (item[field2] <= result[field2]) {
                result = item;
            }
        });
        console.log(result);
        res.send(result);
    } else {
        res.status(400).send('Not Found');
    }

});

app.listen(port);

module.exports = app;