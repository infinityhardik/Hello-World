const http = require('http');

const port = 3000;
const app = http.createServer((req, res) => {
	if(req.url === '/ping'){
		res.writeHead(200, 'Content-Type', 'text/plain');
		res.write('Pong - Basics');
		res.end();
	}else {
		res.writeHead(404, 'Content-Type', 'text/plain');
		res.write('Not Found');
		res.end();
	}
});

app.listen(port);
module.exports = app;