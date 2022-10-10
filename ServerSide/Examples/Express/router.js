const express = require('express');
const products = require('./products');

/*Initialize router object and assign it to router variable */
const router = express.Router();

router.get('/products', (req, res) => {
    /*Send all the products*/
    res.send(products);
});

router.get('/product/:id', (req, res) => {
    /*Get the id from the params*/
    const id = req.params.id;
    /*Filter the products using the id*/
    const result = products.filter(obj => obj.id === parseInt(id, 0));
    /*If the product is found return product else return status 404 with Not Found text*/
    if (result.length != 0) {
        res.send(result);
        return;
    }
    res.status(404).send('Not Found')
});

/*Export the route object */
module.exports = router;