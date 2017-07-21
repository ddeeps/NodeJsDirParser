var fs = require('fs');

module.exports.readDirectory = function(inputDir){
    return new Promise((resolve,reject) => {
        fs.readdir(inputDir,(err,res) => {
            if(err)
            reject(err);
            
            else
            resolve(res);               
        });
    });
}

module.exports.statAsync = function(list){
    return new Promise((resolve,reject)=>{
        fs.lstat(list,function(err,list){
            if(err)
            reject(err);

            else
            resolve(list);
        });
    });
}
