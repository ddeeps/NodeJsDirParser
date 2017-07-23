class DirectoryParser{
    constructor(){           
            this.fileNames=[];
            this.directoryNames=[];
    }

    parseDirectory(callback){
        this.result={
                    'fileNames':this.fileNames,
                    'directoryNames':this.directoryNames
                };
        callback(null,this.result);     
    }
}

module.exports = DirectoryParser;