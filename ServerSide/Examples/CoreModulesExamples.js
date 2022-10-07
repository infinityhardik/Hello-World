// All the Code Snippets given below are for Reference Purposes.

console.log(require('module').builtinModules);
// Returns an Array of all the Core Modules in Node JS.


// Read File Example 1 :

import { readFile } from 'fs';
readFile('/etc/passwd', (err, data) => {
    if (err) throw err;
    console.log(data);
});

/* When the files on your computer are being read, the files could be corrupt, 
unreadable, or missing. Our code does not necessarily detect such errors before it executes. 
So, if something goes wrong, we should expect an error as the first parameter in the callback function */

// Read File Example 2 :

import { readFile } from 'fs';
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    fs.readFile('demofile.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}).listen(port);


// Append File Example 1 :
import { appendFile } from 'fs';
appendFile('message.txt', 'data to append', (err) => {
    if (err) throw err;
    console.log('The "data to append" was appended');
});

// Append File Example 2 :
import { readFile } from 'fs';
var fs = require('fs');
fs.appendFile('demofile1.txt', 'Hello Upgrad!',
    function (err) {
        if (err) throw err;
        console.log('Saved!');
    }
);

// Open Files Example 1 :
import { open } from 'fs';
var fs = require('fs');
fs.open('demofile2.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
});

// Write Files Example 1 :
import { writeFile } from 'fs';
const data = new Uint8Array(Buffer.from('Hello Node.js'));
writeFile('message.txt', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});

// Remove / Unlink File Example 1 :
import { unlink } from 'fs';
// Assuming that 'path/file.txt' is a regular file.
var fs = require('fs');
fs.unlink('path/file.txt', (err) => {
    if (err) throw err;
    console.log('path/file.txt was deleted');
});

// Rename File Example 1 :
import { rename } from 'fs';
rename('oldFile.txt', 'newFile.txt', (err) => {
    if (err) throw err;
    console.log('Rename complete!');
});

// Example Graded Question :
// Suppose you already have a file named data.txt and it consists of the following text: 

// "Hello Students!"

// Now, inside the app.js file, you write the following code:

const fs = require('fs');

const data1 = 'Let\'s learn Node.js.';
const options = {
  encoding: 'utf8',
  flag: 'a'
}

fs.writeFile('data.txt', data1, options, () => {
  console.log('File written!');
});
// What, according to you, will be the contents of the data.txt file after you run the following command inside your Terminal? > node app


/* 
Hello students! Let's learn Node.js.
Feedback:
In the code, you have set the value corresponding to the key named flag as ‘a’. 
‘a’ means append. When you use this flag, the file is opened for appending. 
If the file does not exist, then it will first be created. 
So, the text that is stored in the data variable will be appended to the contents already present inside the file named data.txt.
*/