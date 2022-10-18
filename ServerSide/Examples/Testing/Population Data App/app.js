const express = require('express');
const bodyParser = require('body-parser');
const Population = require('./models/population');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/country/population/:country', (req, res) => {
    Population.find({country: req.params.country})
        .then(result => {
            if(result.length === 0) {
                res.sendStatus(400);
                return;
            }
            res.json(result)
        });
});

app.get('/population/maxPopulation', (req, res) => {
    Population.find({}).sort({ totalPopulation: -1 }).limit(1)
        .then(result => {
            res.json(result[0])
    });
});

app.get('/population/minPopulation', (req, res) => {
    Population.find({}).sort({ totalPopulation: 1 }).limit(1)
        .then(result => {
            res.json(result[0])
    });
});

module.exports = app;