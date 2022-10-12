const { students } = require('./data');
const express = require('express');

const app = express();
const port = 8000;

app.get('/api/students', (req, res) => {
    res.send(students);
});

app.get('/api/students/:name', (req, res) => {
    const name = req.params.name;
    const obj = students.filter(stud => stud.name.toLowerCase() === name.toLowerCase());
    if (obj) {
        res.send(obj);
        return;
    }
    res.status(404);
    res.send('Not Found');
});

app.get('/api/student', (req, res) => {
    const { field1, field2 } = req.query;

    if (!field1 || !field2) {
        res.sendStatus(400);
        return;
    }

    const key = Object.keys(students[0]).filter(k => k === field2.toLowerCase());

    if (!key) {
        res.sendStatus(400);
        return;
    }

    let obj;
    if (field1 === 'topper') {
        obj = students.sort((stud1, stud2) => {
            return stud2[key] - stud1[key];
        });
    } else if (field1 === 'lowest') {
        obj = students.sort((stud1, stud2) => {
            return stud1[key] - stud2[key];
        });
    }

    if (!obj) {
        res.sendStatus(400);
        return;
    }

    res.send(obj[0]);

});

app.listen(port);

module.exports = app;