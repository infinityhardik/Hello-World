const fs = require('fs');
const path = require('path');

const getResult = (file_path) => {
    return new Promise((resolve, reject) => {
        if(fs.existsSync(file_path)){
            fs.readFile(file_path, (error, data) => {
                if(error){
                    reject('Error in reading the file'); 
                }
                resolve(data);
            })
        }else{
            reject('Not Found');
        }
    });
}

module.exports = { getResult };