const fs = require('fs');

const getResult = (file_path) => {
    return new Promise((resolve, reject) => {
        if(fs.existsSync(file_path)){
            fs.readFile(file_path, (error, data) => {
                if(error){
                    reject('Error in reading the file'); 
                }
                if(file_path.indexOf('.png') !== -1){
                    resolve('Image Exist');
                }
                resolve(data);
            })
        }else{
            reject('Not Found');
        }
    });
}

module.exports = { getResult };