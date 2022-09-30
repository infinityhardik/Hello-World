const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer((request, response) => {

    if (response.url === '/') {
        response.writeHead(200, { 'content-type': 'text/html' })
        response.write('<h1>Hi, My Name is Hardik<h1>')
        response.end();

    } else if (response.url === '/about') {
        response.writeHead(200, { 'content-type': 'text/html' })
        response.end('<h2>Learning Programming<h2>');

    } else if (response.url === '/home') {
        response.writeHead(200, { 'content-type': 'text/html' })
        const data = fs.readFileSync('./index.html', 'utf-8')
        response.end(data);
    } else {
        response.statusCode = 404;
        response.end('Page Not Found');
    }
});

server.listen(port, () => {
    console.log(`Server is running on Port : ${port}`);
})
