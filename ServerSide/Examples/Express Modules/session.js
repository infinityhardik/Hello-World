const express = require('express');
const session = require('express-session');

const app = express();
const port = 3000;

app.use(session({
    secret: 'adfasfafadfag',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}));

app.get('/', (req, res) => {
    req.session.name = 'SampleSession';
    res.send("Session Set");
});

app.get('/session', (req, res) => {
    const name = req.session.name;
    res.send(name);
})


app.listen(port, () => console.log('Port listening on ---->', port));

module.exports = app;