const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    if (response.url === '') {
        response.setHeader('Content-Type', 'text/html');
        response.end('<h1>Hi, My Name is Hardik<h1>');
    } else if (response.url === '/about') {
        response.setHeader('Content-Type', 'text/html');
        response.end('<h2>Learning Programming<h2>');
    } else if (response.url === '/home') {
        response.setHeader('Content-Type', 'text/html');
        const data = fs.readFileSync('./index.html', 'utf-8')
        response.end(data);
    } else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.end('Page Not Found');
    }
});

server.listen(port, () => {
    console.log(`Server is running on Port : ${port}`);
})
