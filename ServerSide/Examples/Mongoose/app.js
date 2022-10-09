const express = require('express');
const bodyParser = require('body-parser');
const Student = require('./models/student');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/student/:id', (req, res) => {
    Student
    .findOne({id: req.params.id})
    .then(result => res.json(result))
    .catch(e => res.status(400).json('Not Found'));
});

app.post('/student', (req, res) => {
    const student = new Student(req.body);
    student.save((err, data) => {
        if(data) {
            res.json(data);
        }
        else {
          res.status(422).send(err);
        }
    });
});

module.exports = app;