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
        
        util.readDirectory(this.inputDir).then(fsContents=>{
           if(!fsContents)
           return;
           
           var listLength = fsContents.length;
                
           if(!listLength){
             var result = this.parseDirectory();
             return callback(null,result);
           }

            fsContents.forEach(function(file) {
                file = path.resolve(this.inputDir, file);
                
                util.statAsync(file).then(stat=>{
                    if(stat && stat.isDirectory()){
                         _this.inputDir = file;
                         _this.parseDirectoryAsync(function(err, res) {   
                            _this.directoryNames.push(file);                         
                            if (!--listLength){
                                 _this.parseDirectory(callback);
                            }
                        });
                    }
                    else{              
                        _this.fileNames.push(file);
                        if (!--listLength){
                            _this.parseDirectory(callback);
                        }
                    }
                 }).catch(statExp => {
                     callback(statExp,null);
                });
            }, this);           

       }).catch(readDirExp => {
           callback(readDirExp,null);
       });
    }
}

module.exports = DirectoryParserAsync;


