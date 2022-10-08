const http = require('http');
const { getResult } = require('./customReadFile');

const port = 3000;


const app = http.createServer(async (req, res) => {
    if (req.url.indexOf('.html') !== -1) {
        try {
            const result = await getResult(`views1${req.url}`);
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(result);
            res.end();
        } catch (e) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.write('<h1>NOT FOUND</h1>');
            res.end();
        }
    } else if (req.url.includes('.css')) {
        try {
            const result = await getResult(`styles${req.url}`);
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.write(result);
            res.end();
        } catch (e) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.write('<h1>NOT FOUND</h1>');
            res.end();
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<h1>Not Found</h1>');
        res.end();
    }
});

app.listen(port);

module.exports = app;