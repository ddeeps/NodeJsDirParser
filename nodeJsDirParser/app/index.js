var DirectoryParserAsync = require('./directoryParserAsync.js');
const argv = require('yargs').argv

if(argv.dirTree == '' || argv.dirParser == 'null' || argv.dirParser == 'undefined')
return;

let dirParser = new DirectoryParserAsync(argv.dirTree);

dirParser.parseDirectoryAsync((error, result)=>{
    if(error){
        console.log(error);
        return;
    }
    console.log('Result : '+JSON.stringify(result));
});
    