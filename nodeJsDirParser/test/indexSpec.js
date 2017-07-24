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

    it('should return parsed result of 3 files and 2 folders',function(){
        let directoryParserAsync = new DirectoryParserAsync(DIR);  
        let res1='BAT'+sep+'SAT'+sep+'TOM'+sep+'DEPTH'+sep+'d1.js';
        let res2='BAT'+sep+'SAT'+sep+'TOM'+sep+'DEPTH'+sep+'d2.js';
        let res3='BAT'+sep+'SAT'+sep+'TOM'+sep+'DEPTH'+sep+'d3.js';
        let res4 = 'BAT'+sep+'SAT'+sep+'TOM';
        let res5 = 'BAT'+sep+'SAT'+sep+'TOM'+sep+'DEPTH';

        directoryParserAsync.parseDirectoryAsync(function(error,result){        
            expect((result.fileNames[0].indexOf(res1))>-1).to.be.true;
            expect((result.fileNames[1].indexOf(res2))>-1).to.be.true;
            expect((result.fileNames[2].indexOf(res3))>-1).to.be.true;
            expect((result.directoryNames[0].indexOf(res4))>-1).to.be.true;
            expect((result.directoryNames[1].indexOf(res5))>-1).to.be.true; 
        });
    });
});