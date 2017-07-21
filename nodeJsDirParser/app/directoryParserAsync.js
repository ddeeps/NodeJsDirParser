var DirectoryParser = require('./directoryParser.js'); 
var util = require('../utils/util.js');
var path = require('path');

class DirectoryParserAsync extends DirectoryParser{
     constructor(inputDir){
        super();
        this.inputDir = inputDir;
    }

    parseDirectoryAsync(callback){ 
        var _this = this;
       
        if(!this.inputDir)
        return;
        
        util.readDirectory(this.inputDir).then(listOfFiles=>{
           if(listOfFiles)
            var listLength = listOfFiles.length;
            else
            return;

           if(!listLength){
             callback('Empty file/directiry list',null);
           }

            listOfFiles.forEach(function(file) {
                file = path.resolve(this.inputDir, file);
                
                util.statAsync(file).then(stat=>{
                    if(stat.isFile()){
                         _this.fileNames.push(file);
                            if (!--listLength){
                               _this.getResult(callback);
                            }
                    }
                    else{
                         _this.directoryNames.push(file);
                         _this.inputDir = file;
                         _this.parseDirectoryAsync(function(err, res) {                            
                            if (!--listLength){
                                 _this.getResult(callback);
                            }
                        });
                    }
                 }).catch(statExp => {
                     console.log('State Exception -> '+statExp);
                    _this.getResult(callback);
                });
            }, this);           

       }).catch(readDirExp => {
           callback(readDirExp,null);
       });
    }

    getResult(callback){   
        var result = this.parseDirectory();    
        callback(null,result);
    }
}

module.exports = DirectoryParserAsync;


