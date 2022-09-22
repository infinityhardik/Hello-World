const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '') {
        res.writeHead(200, 'OK', { 'content-type': 'text/html' })
        // JSON Object to specify the Content Type

        // res.end('<h1>Hello, World! Hardik<h1>');
        // Normal Response 

        // document.querySelectorAll('h1');
        // This will crash the Server because we cannot access the DOM or the Window Object using NODE

        fs.readFile('/staticWebApp.html', 'utf-8', (err, data) => {
            if (data) {
                res.end(data);
            } else {
                console.log('There is some error');
                res.end(err);
            }

        });

    }
});

server.listen(3000,);

