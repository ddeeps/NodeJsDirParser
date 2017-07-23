var DirectoryParserAsync = require('../app/directoryParserAsync.js');
var testDir = require('../data/testDir.js');
var sep = path.sep;
var DIR = 'BAT'+sep+'SAT';
const argv = require('yargs').argv

describe('Index()',()=>{
     
    beforeEach(()=>{
        mock(testDir);
    });

    afterEach(mock.restore);
    
   it('should return error when input is undefined',()=>{
       let directoryParserAsync = new DirectoryParserAsync(argv.dirTree);
       directoryParserAsync.parseDirectoryAsync((err,res)=>{
           expect(err).to.be.instanceof(Error);
       });
   }); 
   
   it('should return parsed directory result',()=>{
       let obj = new DirectoryParserAsync(DIR);
       obj.parseDirectoryAsync((err,res)=>{
       });
   });
});