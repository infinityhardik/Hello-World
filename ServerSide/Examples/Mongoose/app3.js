const express = require('express');
const bodyParser = require('body-parser');
const Cart = require('./models/cart');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/cart', (req, res) => {
    /*ToDo 1: Get the cart objects from the Cart Collection using find() method and 
            return the result, if any error it should send status 400 */
    Cart.find().then(doc => {
        res.writeHead(200);
        res.end(data);
    }).catch(err => {
        res.writeHead(400);
        res.end();
    });
});

const calculatePrice = (items) => {
    const price = items.reduce((total, item) => total + item.price, 0);
    return price;
}

app.post('/cart', (req, res) => {
    /*ToDo 2: Calculate the price of the cart from the items which is sent in the body using calculatePrice function by passing the items array and create an object with 
              properties items from req.body.items and price which is calculated. Use insertMany() or save() 
              method to add the object created to the Cart Collection. If any error return status 422*/
    let obj = new Cart({
        items: req.body.items,
        price: calculatePrice(req.body.items)
    });
    obj.save().then(doc => console.log("Successful")).catch(err => {
        res.writeHead(422);
        res.end();
    });

});

/*ToDo 3: Export the app using modules.exports */
module.exports = app;