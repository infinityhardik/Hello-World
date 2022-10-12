const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const port = 3000;

app.use(cookieParser({ extended: true }));
app.use(express.urlencoded());
app.use(express.static('public'));

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.use('/authenticate', (req, res, next) => {
    console.log(req.body);
    if (req.cookies.user) {
        if (req.cookies.user === 'admin') {
            res.send('Welcome Back');
        } else {
            res.sendStatus(401);
        }
    } else {
        next();
    }
});


app.post('/authenticate', (req, res) => {
    // Destructuring Request
    const { userName, password } = req.body;
    res.cookie('user', 'admin', { maxAge: 30000 });
    res.send(`Hello ${userName}`);
});

app.listen(port);

module.exports = app;


