const express = require('express');

const app = express();
const port = 8000;

app.get('/ab?cd', (req, res) => {
    res.send(req.url);
});

app.get('/ab+cd', (req, res) => {
    res.send(req.url);
});

app.get('/calculate/:a.:b', (req, res) => {
    const { a, b } = req.params;

    if (isNaN(a) || isNaN(b)) {
        res.sendStatus(400);
        return;
    }

    const sum = parseInt(a, 10) + parseInt(b, 10);
    res.send(JSON.stringify(sum));
})

app.listen(port, () => {
    console.log('Server listening at port -> ' + port);
});

module.exports = app;
