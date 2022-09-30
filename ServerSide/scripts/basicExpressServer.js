const express = require('express');
const app = express();
console.log('Hi, Hardik');
// console.log(app);

app.get("/", (req, res) => {
    console.log('Working');
    res.send("Default Get for '/' Port : 3000 ");
    res.status(200)
})
app.get("/abc", (req, res) => {
    console.log('Working');
    res.send("ABC Path > Default Get for '/abc' Port : 3000 ");
    res.status(200)
})
app.all("*", (req, res) => {
    console.log('Working');
    res.status(404).send("Error Page : 3000");
})

app.listen(3000);