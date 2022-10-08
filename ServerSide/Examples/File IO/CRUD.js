const fs = require("fs");

const readFile = (path) => {
    return new Promise((resolve, reject) => {
      fs.readFile(path, 'utf-8', (err, data) => {
          if(err){
              reject('File does not exist');
              return;
          }
          resolve(data);
      });
    });
}

  const writeFile = (path, content) => {
    return new Promise((resolve, reject) => {
        if(fs.existsSync(path)){
            reject('File Already Exist');
            return;
        }
        fs.writeFile(path, content, (err) => {
            if(err){
                reject('Error in creating a new File');
                return;
            }
            resolve('File written Successfully');
        });
    });
}

const appendFile = (path, content) => {
    return new Promise((resolve, reject) => {
        fs.appendFile(path, content, (err) => {
            if(err) {
                reject('Error in appending data in the file');
                return;
            }
            resolve('Data added successfully');
        });
    });
}

const renameFile = (sourceFile, destFile) => {
    return new Promise((resolve, reject) => {
        fs.rename(sourceFile, destFile, (err) => {
            if(err){
                reject('Error while renaming the file');
                return;
            }
            resolve('File renamed Successfully');
        });
    });
}

const deleteFile = (file) => {
    return new Promise((resolve, reject) => {
        fs.unlink(file, err => {
            if(err){
                reject('Error while deleting the file');
                return;
            }
            resolve('File deleted successfully');
        });
    });
}


module.exports = { readFile, writeFile, appendFile, renameFile, deleteFile };