const express = require('express');
const bodyParser = require('body-parser');
const Student = require('./models/student');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/student/:id', (req, res) => {
    /*ToDo 1: Get the student object using findOne() method from students Collection with id as filter
            which is provided in req.params.id and return the result, if error return status 400 */
    Student.findOne({ id: req.params.id }).then(doc => {
        res.writeHead(200);
        res.end(doc);
    }).catch(err => {
        res.writeHead(400);
        res.end();
    })
});

app.post('/student', (req, res) => {
    /*ToDo 2: Create an object by intiatilising the student model and pass the req.body. 
            Add the object to the database using save() method and return the result, and on error send status 422 */
    let data = new Student(req.body);
    data.save().then(doc => {
        res.writeHead(200);
        res.end(doc);
    }).catch(err => {
        res.writeHead(422);
        res.end();
    })
});

/*ToDo 3: Export the app using module.exports */
module.exports = app;