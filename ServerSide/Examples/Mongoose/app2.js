const express = require('express');
const bodyParser = require('body-parser');
const Cart = require('./models/cart');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/cart', (req, res) => {
    Cart
        .find()
        .then(result => res.json(result))
        .catch(e => res.status(400).json('Not Found'));
});

const calculatePrice = (items) => {
    const price = items.reduce((total, item) => total + item.price, 0);
    return price;
}

app.post('/cart', (req, res) => {
    const price = calculatePrice(req.body.items);
    const obj = {
        items: req.body.items,
        price: price
    }
    Cart
        .insertMany(obj)
        .then(result => res.json(result))
        .catch(e => res.status(422));
});

module.exports = app;