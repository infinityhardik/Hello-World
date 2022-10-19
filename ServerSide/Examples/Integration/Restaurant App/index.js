const express = require('express');
const bodyParser = require('body-parser');
const data = require('./data');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get("/", (req, res) => {
    /*ToDo 1: Send the index.html file using sendFile method of response object */
    res.sendFile(__dirname+'/index.html');
});

app.get('/api/restaurant', (req, res) => {
    /*ToDo 2: Return the restaurant data using json method of response object */
    res.send(data);
});

app.get('/api/restaurant/:label', (req, res) => {
    /*ToDo 3: Get the array of object from the data array using label filter where label is provided in req.params
        if the object has length 0 return status 400 and text Not Found else return the first object from the array
        of objects */
        let label = req.params.label;
        console.log(label);
        let obj = data.filter(item =>{
           return item.label.toLowerCase() === label.toLowerCase();
        });
        
        console.log('Items : '+obj);
        if(obj.length===0){
            res.status(400).send('Not Found');
        } else {
            res.send(obj[0]);
        }
});

app.listen(PORT, () => console.log('App Listening on Port--->', PORT));

/*ToDo 4: Export the app using module.exports */
module.exports= app;