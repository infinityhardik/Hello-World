const express = require('express');
const data = require('./data.js');

const app = express();
const port = 3000;

app.get(/* ToDo 1: Add the params from and to where from and to should be seperate by hyphen with /fairPrice/{params} */'/fairPrice/:from-:to', (req, res) => {
    const { from, to } = req.params;
    /*ToDo 2: If from or to is not defined return 400 status */
    if (from === undefined && to === undefined) {
        res.status(400).send('undefined params');
    }
    /*ToDo 3: Filter from data array using from and to and if the length is 0 return 404 else return the object*/
    let result = data.filter(item => {
        if (item.to === to.toUpperCase() && item.from === from.toUpperCase()) {
            return item;
        }
    });
    if (result.length === 0) {
        res.status(404).send('Not Found');
    } else {
        res.send(result);
    }
});

app.post(/* ToDo 4: Add the params from, to, price where from and to should be seperated by - hyphen with /addFair/{params}/{params} endpoint */'/addFair/:from-:to/:price', (req, res) => {
    const { from, to, price } = req.params;

    /*ToDo 5: If from, to or price is not defined return 400 status */
    if (from === undefined && to === undefined && price === undefined) {
        res.status(400).send('undefined');
    }

    /*ToDo 6: If the fair price is already present in the data array for from and to return status of 409*/
    const obj = data.filter(obj => obj.from === from.toUpperCase() && obj.to === to.toUpperCase());


    if (obj.length !== 0) {
        return res.status(409);
    }
    /*ToDo 7: Create the object with properties of from , to and price and assign it to fairPriceObj */
    let fairPriceObj = {
        from: from,
        to: to,
        price: price
    }
    data.push(fairPriceObj);
    /*ToDo 8: Send the fairPriceObj */
    res.send(fairPriceObj);
})

app.listen(port, () => {
    console.log('Server listening at port -> ' + port);
});

module.exports = app;