const http = require('http');
const { getResult } = require('./customReadFile1');

const port = 3000;


const app = http.createServer(async (req, res) => {
   /*ToDo
   1: Check the index of the URL if the index of the req.url is .html set the content-type to text/html
      and status to 200 and call getResult(`views${req.url}`) in try/catch block in the catch block 
      set content-type to text/html and status to 404
   2: Similarly check the index of the URL if the index of the req.url is .png/.css/.js set the content-type to based on the extension
      and status to 200 and call getResult(path_name) Eg:getResult(`public/css${req.url}`) in try/catch block in the catch block 
      set content-type to text/html and status to 404. Check the public folder to set the path based on the extension.
   3: If any of the extension is not available return status 404 with text of Not Found
   Note: For image the content-type should be image/png. Check only for png format.
   */
   if (req.url.includes('.html')) {
      try {
         const result = await getResult('./views' + req.url)
         res.writeHead(200, { 'Content-type': 'text/html' });
         res.end(result);
      } catch (error) {
         res.writeHead(404, { 'Content-type': 'text/html' });
         res.end('Not Found');
      }
   } else {
      if (req.url.includes('.css')) {
         try {
            const result = await getResult(`public/css${req.url}`);
            res.writeHead(200, { 'Content-type': 'text/css' });
            res.end(result);
         } catch (error) {
            res.writeHead(404, { 'Content-type': 'text/html' });
            res.end('Not Found');
         }
      } else if (req.url.includes('.js')) {
         try {
            const result = await getResult(`public/js${req.url}`);
            res.writeHead(200, { 'Content-type': 'text/js' });
            res.end(result);
         } catch (error) {
            res.writeHead(404, { 'Content-type': 'text/html' });
            res.end('Not Found');
         }
      } else if (req.url.includes('.png')) {
         try {
            const result = await getResult(`public/assets${req.url}`);
            res.writeHead(200, { 'Content-type': 'image/png' });
            res.end(result);
         } catch (error) {
            res.writeHead(404, { 'Content-type': 'text/html' });
            res.end('Not Found');
         }
      } else {
         res.writeHead(404, { 'Content-type': 'text/html' });
         res.end('Not Found');
      }
   }
});

app.listen(port);

module.exports = app;

/*Export the app using modules.export */