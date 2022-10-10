const express = require('express');

const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/welcome/:name', (req, res) => {
    const name = req.params.name;
    res.send('Hello ' + name);
});

app.use((req, res, next) => {
    res.sendStatus(404);
})

app.listen(port, () => console.log('App listening on port: ' + port));

module.exports = app;
