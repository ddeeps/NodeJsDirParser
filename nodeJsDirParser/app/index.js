var DirectoryParserAsync = require('./directoryParserAsync.js');
const argv = require('yargs').argv

if(argv.dirTree != '' && argv.dirTree != undefined){
    let dirParser = new DirectoryParserAsync(argv.dirTree);
    dirParser.parseDirectoryAsync((error, result)=>{
        if(error){
            console.log("Error : "+error);
            return;
        }
        console.log('Result : '+JSON.stringify(result));
    });
}