const express = require('express');

const app = express();
const port = 3000;

app.get(/*ToDo 1: Create an endpoint which should have optional operator ? between ab and cd */'/ab?cd', (req, res) => {
    res.send(req.url);
});

app.get(/*ToDo 2: Create an endpoint which should have + operator between ab and cd  */ '/ab+cd', (req, res) => {
    res.send(req.url);
});

app.get(/*ToDo 3: Add the params a and b with . operator between them with endpoint /calculate/{params} */'/calculate/:value', (req, res) => {

    /*ToDo 4: Store the params in a and b variable and check whether they are Integer if not return status 400 */
    console.log(req.params.value);
    let result = req.params.value.split('.');
    console.log(result);
    const a = result[0];
    const b = result[1];
    if(isNaN(a)=== true){
        console.log('A is not a Number');
    }
    if(isNaN(b)=== true){
        console.log('B is not a Number');
    }

    const sum = parseInt(a, 10) + parseInt(b, 10);
    if (typeof sum == 'number') {
        console.log(sum);
        res.send(JSON.stringify(sum));
    } else {
        res.status(400).send('Not a Number');
    }
})

app.listen(port, () => {
    console.log('Server listening at port -> ' + port);
});

module.exports = app;
