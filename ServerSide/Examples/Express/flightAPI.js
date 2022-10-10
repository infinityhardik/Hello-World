const express = require('express');
const data = require('./data');

const app = express();
const port = 3000;

app.get('/fairPrice/:from-:to', (req, res) => {
    const { from, to } = req.params;
    if (!from || !to) {
        res.sendStatus(400);
        return;
    }
    const obj = data.filter(obj => obj.from === from.toUpperCase() && obj.to === to.toUpperCase());
    if (obj.length === 0) {
        res.sendStatus(404);
        return;
    }
    res.send(obj);
});

app.post('/addFair/:from-:to/:price', (req, res) => {
    const { from, to, price } = req.params;

    if (from === undefined || isNaN(price) || to === undefined) {
        res.sendStatus(400);
        return;
    } else if (from.trim() === "" || to.trim() === "") {
        res.sendStatus(400);
        return;
    }

    const obj = data.filter(obj => obj.from === from.toUpperCase() && obj.to === to.toUpperCase());
    if (obj.length !== 0) {
        res.sendStatus(409);
        return;
    }
    const fairPriceObj = {
        from: from,
        to: to,
        price: parseInt(price, 10)
    };
    data.push(fairPriceObj);
    res.send(fairPriceObj);
})

app.listen(port, () => {
    console.log('Server listening at port -> ' + port);
});

module.exports = app;