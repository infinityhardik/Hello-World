const express = require('express');
const bodyParser = require('body-parser');
const User = require('./models/user');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/signup', (req, res) => {
    res.sendFile(__dirname+'/index.html');
});

app.post('/signup', (req, res) => {
    const { email, password } = req.body;
    User.findOne({email: email})
    .then((result) => {
        if(result){
            res.status(422).send('User already Exist');
        }else {
            User.insertMany(req.body)
            .then(result => res.status(201).send('SignUp Successful'))
            .catch(e => {
                console.log(e);
                res.sendStatus(400)
            });
        }
    })
    .catch(e => {
        console.log(e)
        res.sendStatus(400)
    });
    
});

module.exports = app;