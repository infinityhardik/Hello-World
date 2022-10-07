const fs = require('fs');
const http = require('http');

port = 3000;

/*Create an object with properties: /, /contactus, /aboutus and /thankyou and mapping with correspoding html file and assign it to routeMap variable*/

const routeMap = {
    home: './views/index.html',
    contactus: './views/contactus.html',
    aboutus: './views/aboutUs.html',
    thankyou: './views/thankyou.html'
}

const app = http.createServer((req, res) => {
    /*ToDo 2: If the url exist in the routeMap object, read the file using fs module and return the file
               with status of 200 */
    /*ToDo 3: If the file doesn't exist return 404 status */
    let url = req.url.replace('/', '');
    if (url === '') {
        url = 'home';
    }
    console.log(url);


    if (url in routeMap) {
        console.log("present");

        console.log(routeMap[url]);

        fs.readFile(`${routeMap[url]}`, { encoding: 'utf-8' }, (error, data) => {
            if (error) {
                console.log(error.message);
                res.end();
            } else {
                res.writeHead(200, { 'Content-type': 'text/html' });
                res.write(data);
                res.end();
            }
        });
    } else {
        res.writeHead(404, { 'Content-type': 'text/plain' });
        res.end('Not Found');
    }
});

app.listen(port);

module.exports = { app, routeMap };