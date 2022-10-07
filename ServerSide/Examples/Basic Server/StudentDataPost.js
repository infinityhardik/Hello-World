const http = require('http');

const port = 3000;
const app = http.createServer((req, res) => {

    const studentData = [];
    // const studentData = [{
    //     name: "Hardik",
    //     place: 'Rajkot'
    // }];
    /* ToDo 1: Call the data event using the request object to store the chunks in data variable */
    let data = '';
    req.on('data', (chunk) => {
        data += chunk;
    })
    /*ToDo 2: Parse the data and assign to "obj" variable 
    and if "name or place" property is not defined return status 400 */
    req.on('end', () => {
        if (req.url === '/student' && req.method === 'POST') {
            const obj = JSON.parse(req.data);
            if (obj.name === undefined && obj.place === undefined) {
                res.writeHead(400, { 'Content-Type': 'plain/text' });
                res.end('Name and Place undefined');
            } else {
                /*ToDo 3: Push the object to studentData array and return the object with status code of 200 and
                            content type of application/json */
                studentData.push(obj);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(studentData));
            }
        } else if (req.url === '/students' && req.method === 'GET') {
            /* ToDo 4: Return the studentData array with status code of 200 and content type of application/json */
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(studentData));
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.write('Not Found');
            res.end();
        }
    });
});

app.listen(port);
/*ToDo 5: Export the app using modules.export */
module.exports = app;