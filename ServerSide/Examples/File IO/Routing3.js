const fs = require('fs');
const http = require('http');

const port = 3000;

const getViewUrl = (url) => {
    /*ToDo 1: It should create a path like views/index.html, handle seperate condition for / endpoint */
    if(url==='/'){
        return 'views/index.html'
    }
    const path = `views${url}.html`;
    console.log(path)
    return path;
}

const app = http.createServer((req, res) => {
    fs.readFile(/*ToDo 2: Call the getViewUrl function and pass the url as a parameter*/ getViewUrl(req.url), (error, data) => {
        /*ToDo 3: If the file is not found return 404 status else return the data with status of 200*/
        if(error){
            res.writeHead(404, {'Content-type':'text/html'});
            res.end('<h1>Not Found</h1>');
        }
        res.writeHead(200, {'Content-type':'text/html'});
        res.end(data);
    });
});

app.listen(port);

module.exports = { app, getViewUrl };