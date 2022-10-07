/*ToDo 1: Import fs module and assign it to fs variable*/
const fs = require('fs');

const readFile = (path) => {
    return new Promise((resolve, reject) => {
        /*ToDo 2: Read the file using fs.readFile and pass the path and utf-8 as params, if it is error call pass
        File does not exist inside the reject function else pass the data inside the resolve function  */
        fs.readFile(path, { encoding: "utf-8" }, (error) => {
            return reject('File does not exist');
        }, (data) => {
            return resolve(data);
        })
    });
};

const writeFile = (path, content) => {
    return new Promise((resolve, reject) => {
        /*ToDo 3: Write the file using fs.writeFile function and pass the path and content as params, if it is error pass
        Error in creating a new File inside the reject function else pass the File written Successfully inside the resolve function  */
        fs.writeFile(path, content, (error) => {
            return reject('Error in creating a new File');
        }, (data) => {
            return resolve('File written Successfully');
        })
    });
}


module.exports = { readFile, writeFile };

