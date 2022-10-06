const http = require('http');
/*ToDo:1 Import all arithmetic functions from arithmetic.js file */
const { add, subtract, multiply, divide } = require('./calculatorOnWebFunctions.js');

const port = 3000;
const app = http.createServer((req, res) => {
    if (req.url === '/arithmetic' && req.method === 'POST') {
        let data = '';
        req.on('data', chunk => {
            data += chunk;
        });

        req.on('end', () => {

            const obj = JSON.parse(data);
            console.log(obj);
            /*ToDo 2: If any of the 3 properties namely operation, num1 and num2 are not defined return status 400 and return */
            if (obj.operation == undefined && obj.num1 == undefined && obj.num2 == undefined) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('Error in Data');

            } else if (typeof obj.num1 === Number && typeof obj.num2 === Number) {
                /*ToDo 3: Check if the value of num1 and num2 are of type numbers if not return status 400 and return */
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                console.log('In Number Checking');
                res.end();

            } else {
                /*ToDo 4: Call the specific function based on the operation value and store in result variable else return status 400 and return*/
                let result = 0;
                if (obj.operation === 'add') {
                    result = add(obj.num1, obj.num2);
                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    res.end(JSON.stringify(result));

                } else if (obj.operation === 'subtract') {
                    result = subtract(obj.num1, obj.num2);
                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    res.end(JSON.stringify(result));

                } else if (obj.operation === 'multiply') {
                    result = multiply(obj.num1, obj.num2);
                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    res.end(JSON.stringify(result));

                } else if (obj.operation === 'divide') {
                    result = divide(obj.num1, obj.num2);
                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    res.end(JSON.stringify(result));

                } else {
                    res.writeHead(404, { 'Content-Type': 'text/plain' });
                    res.end('NOT FOUND');
                    
                }
            }
        });
    } else {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.write('Not Found');
        res.end();
    }
});

app.listen(port);
module.exports = app;

/* 
Request Pro-Forma

{
    "operation":"add",
    "num1":1,
    "num2":2
}
*/