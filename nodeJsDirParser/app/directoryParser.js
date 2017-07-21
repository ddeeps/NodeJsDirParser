class DirectoryParser{
    constructor(){           
            this.fileNames=[];
            this.directoryNames=[];
    }

    parseDirectory(){
        this.result={
                    'fileNames':this.fileNames,
                    'directoryNames':this.directoryNames
                };
        return (this.result);     
    }
}

module.exports = DirectoryParser;