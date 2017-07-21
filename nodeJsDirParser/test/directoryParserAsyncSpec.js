var DirectoryParserAsync = require('../app/directoryParserAsync.js');
var testDir = require('../data/testDir.js');
var DirectoryParser = require('../app/directoryParser.js'); 
var sep = path.sep;
var DIR = 'BAT'+sep+'SAT1';
var DIR1 = 'BAT'+sep+'SAT'; 
var DIR2 = 'BAT'+sep+'SAT'+sep+'TOM'; 
var DIR3 = 'BAT'+sep+'CAT';
var DIR4 = 'SKYPE'+sep+'CHAT'+sep+'TEXT';
var DIR5 = 'SKYPE'+sep+'VEDIO';
var DIR6 = 'SKYPE'+sep+'CHAT'+sep+'EMOJIES'; 
//global.sinon = require('sinon');

describe('constructor()',function(){
    it('should call "super"',function(){
        let directoryParser = new DirectoryParser();
        expect(directoryParser).to.have.property('fileNames');   
        expect(directoryParser).to.have.property('directoryNames'); 
        expect(directoryParser).to.have.property('parseDirectory');   
    });

    it('constructor should have property "inputDir"',function(){
        var directoryParserAsync = new DirectoryParserAsync('./ANY/DIR../');        
        expect(directoryParserAsync).to.have.property('inputDir');
    });
});

describe('parseDirectoryAsync()', function(){
     beforeEach(()=>{
        mock(testDir);
     });

     afterEach(mock.restore);

     //Failing test case
     it('should return error when input directory is incorrect',function(){
        var directoryParserAsync = new DirectoryParserAsync(DIR);  
        //let errStr = 'ENOENT, no such file or directory \'BAT/SAT1\'';

        directoryParserAsync.parseDirectoryAsync(function(error,result){
            expect(error).to.be.instanceof(Error);     
            //expect(error.message).to.equals(errStr);      
        });
     });

     //Passing test cases
     it('should return parsed result of 3 files and 2 folders',function(){
        var directoryParserAsync = new DirectoryParserAsync(DIR1);  
        let res1='BAT'+sep+'SAT'+sep+'TOM'+sep+'DEPTH'+sep+'d1.js';
        let res2='BAT'+sep+'SAT'+sep+'TOM'+sep+'DEPTH'+sep+'d2.js';
        let res3='BAT'+sep+'SAT'+sep+'TOM'+sep+'DEPTH'+sep+'d3.js';
        var res4 = 'BAT'+sep+'SAT'+sep+'TOM';
        var res5 = 'BAT'+sep+'SAT'+sep+'TOM'+sep+'DEPTH';

        directoryParserAsync.parseDirectoryAsync(function(error,result){
            expect(result.fileNames).to.have.lengthOf(3);
            expect(result.directoryNames).to.have.lengthOf(2);    
            
            expect((result.fileNames[0].indexOf(res1))>-1).to.be.true;
            expect((result.fileNames[1].indexOf(res2))>-1).to.be.true;
            expect((result.fileNames[2].indexOf(res3))>-1).to.be.true;
            expect((result.directoryNames[0].indexOf(res4))>-1).to.be.true;
            expect((result.directoryNames[1].indexOf(res5))>-1).to.be.true; 
        });
    });  

    it('should return parsed result of 3 files and 1 folder',function(){
        var directoryParserAsync = new DirectoryParserAsync(DIR2);
        let res1='BAT'+sep+'SAT'+sep+'TOM'+sep+'DEPTH'+sep+'d1.js';
        let res2='BAT'+sep+'SAT'+sep+'TOM'+sep+'DEPTH'+sep+'d2.js';
        var res3 = 'BAT'+sep+'SAT'+sep+'TOM'+sep+'DEPTH'+sep+'d3.js';
        var res4 = 'BAT'+sep+'SAT'+sep+'TOM'+sep+'DEPTH';  

        directoryParserAsync.parseDirectoryAsync(function(error,result){
            expect(result.fileNames).to.have.lengthOf(3);
            expect(result.directoryNames).to.have.lengthOf(1);      

            expect((result.fileNames[0].indexOf(res1))>-1).to.be.true;
            expect((result.fileNames[1].indexOf(res2))>-1).to.be.true;
            expect((result.fileNames[2].indexOf(res3))>-1).to.be.true;     
            expect((result.directoryNames[0].indexOf(res4))>-1).to.be.true;   
        });
    });

    it('should return parsed result of 2 files and empty folder',function(){
        var directoryParserAsync = new DirectoryParserAsync(DIR3); 
        let res1='BAT'+sep+'CAT'+sep+'cat1.js';
        let res2='BAT'+sep+'CAT'+sep+'cat2.js';

         directoryParserAsync.parseDirectoryAsync(function(error,result){
            expect(result.fileNames).to.have.lengthOf(2);
            expect(result.directoryNames).to.have.lengthOf(0);

            expect((result.fileNames[0].indexOf(res1))>-1).to.be.true;
            expect((result.fileNames[1].indexOf(res2))>-1).to.be.true;
         });
    });

    it('should return parsed result of 4 files and 1 folder',function(){
        var directoryParserAsync = new DirectoryParserAsync(DIR4); 
        let res1='SKYPE'+sep+'CHAT'+sep+'TEXT'+'Alpha.txt';
        let res2='SKYPE'+sep+'CHAT'+sep+'TEXT'+'Caps.txt';
        let res3='SKYPE'+sep+'CHAT'+sep+'TEXT'+'lowCase.txt';
        let res4='SKYPE'+sep+'CHAT'+sep+'TEXT'+'specChar.txt';
        let res5='SKYPE'+sep+'CHAT'+sep+'EMOJIES'+'flowers';

        directoryParserAsync.parseDirectoryAsync(function(error,result){
            expect(result.fileNames).to.have.lengthOf(4);
            expect(result.directoryNames).to.have.lengthOf(1);  

            expect((result.fileNames[0].indexOf(res1))>-1).to.be.true;
            expect((result.fileNames[1].indexOf(res2))>-1).to.be.true;
            expect((result.fileNames[2].indexOf(res3))>-1).to.be.true;
            expect((result.fileNames[3].indexOf(res4))>-1).to.be.true;  

            expect((result.directoryNames[0].indexOf(res5))>-1).to.be.true;
        });
    }); 

    it('should return parsed result of 2 files and empty folder',function(){
        var directoryParserAsync = new DirectoryParserAsync(DIR5);  
        let res1='SKYPE'+sep+'VEDIO'+sep+'appear.jpg';
        let res2='SKYPE'+sep+'VEDIO'+sep+'shareScreen.js';

        directoryParserAsync.parseDirectoryAsync(function(error,result){
            expect(result.fileNames).to.have.lengthOf(2);
            expect(result.directoryNames).to.have.lengthOf(0); 

            expect((result.fileNames[0].indexOf(res1))>-1).to.be.true;
            expect((result.fileNames[1].indexOf(res2))>-1).to.be.true;
        });
    });    

     it('should return parsed result of 6 files and 1 folder',function(){
        var directoryParserAsync = new DirectoryParserAsync(DIR6);  
        let res1='SKYPE'+sep+'CHAT'+sep+'EMOJIES'+sep+'Scilent.jpg';
        let res2='SKYPE'+sep+'CHAT'+sep+'EMOJIES'+sep+'anger.jpg';
        let res3='SKYPE'+sep+'CHAT'+sep+'EMOJIES'+sep+'envy.jpg';
        let res4='SKYPE'+sep+'CHAT'+sep+'EMOJIES'+sep+'laugh.jpg';
        let res5='SKYPE'+sep+'CHAT'+sep+'EMOJIES'+sep+'smile.jpg';
        let res6='SKYPE'+sep+'CHAT'+sep+'EMOJIES'+sep+'wink.jpg';
        let res7='SKYPE'+sep+'CHAT'+sep+'EMOJIES'+sep+'flowers';

        directoryParserAsync.parseDirectoryAsync(function(error,result){
            expect(result.fileNames).to.have.lengthOf(6);
            expect(result.directoryNames).to.have.lengthOf(1); 

            expect((result.fileNames[0].indexOf(res1))>-1).to.be.true;
            expect((result.fileNames[1].indexOf(res2))>-1).to.be.true;
            expect((result.fileNames[2].indexOf(res3))>-1).to.be.true;
            expect((result.fileNames[3].indexOf(res4))>-1).to.be.true; 
            expect((result.fileNames[4].indexOf(res5))>-1).to.be.true;
            expect((result.fileNames[5].indexOf(res6))>-1).to.be.true;  

            expect((result.directoryNames[0].indexOf(res7))>-1).to.be.true;
        });
    }); 
});

describe('getResult()',function(){
    it('it should return result in json format',function(){
        var directoryParserAsync = new DirectoryParserAsync(DIR3);
        var spyCallback = sinon.spy();
        directoryParserAsync.getResult(spyCallback);
        expect(spyCallback).to.have.been.called;
        spyCallback.restore;
    });
});