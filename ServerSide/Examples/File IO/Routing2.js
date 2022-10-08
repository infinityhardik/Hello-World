const fs = require('fs');
const http = require('http');

const port = 3000;

const routeMap = {
    "/": "views/index.html",
    "/aboutus": "views/aboutUs.html",
    "/contactus": "views/contactus.html",
    "/thankyou": "views/thankyou.html"
}

const app = http.createServer((req, res) => {
    if(routeMap[req.url]){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.readFile(routeMap[req.url], (error, data) => {
            if(error){
                res.write("<h1> Not Found </h1>");
                res.end();
            }
            res.write(data);
            res.end();
        });
    }else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write("<h1> Not Found </h1>");
        res.end();
    }
});

app.listen(port);

module.exports = {app, routeMap};