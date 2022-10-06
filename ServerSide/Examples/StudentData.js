const http = require('http');
const student = [
	{
		id: 101,
		name: 'John',
	},
	{
		id: 102,
		name: 'Tommy',
	},
	{
		id: 103,
		name: 'Charlie'
	},
	{
		id: 104,
		name: 'Raj'
	},
	{
		id: 105,
		name: 'Khan'
	}
];

const port = 3000;
const app = http.createServer((req, res) => {
	if (req.url === '/students') {
		res.writeHead(200, { 'Content-Type': 'application/json' });
		res.end(JSON.stringify(student));
	} else {
		res.writeHead(404, { 'Content-Type': 'text/plain' });
		res.write('Not Found');
		res.end();
	}
});

app.listen(port);

module.exports = app;