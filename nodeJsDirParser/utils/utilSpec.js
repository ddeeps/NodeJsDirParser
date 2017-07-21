var testDir = require('../data/testDir.js');
var sep = path.sep;
var DIR1 = 'BAT'+sep+'SAT'; 
var DIR2 = 'BAT'+sep+'SAT'+sep+'TOM'; 
var DIR3 = 'BAT'+sep+'CAT'; 
var DIR4 = 'SKYPE'+sep+'CHAT'+sep+'TEXT';
var DIR5 = 'SKYPE'+sep+'VEDIO';
var DIR6 = 'SKYPE'+sep+'CHAT'+sep+'EMOJIES'; 

describe('readDirectory()',function(){

     beforeEach(()=>{
     mock(testDir);
     });

     afterEach(mock.restore);

    it('should read input directory DIR1 and check its length',function(){
        util.readDirectory(DIR1).then((res)=>{
           expect(res).to.have.lengthOf(1);
        });
    });

    it('should read input directory DIR2 and check its length',function(){
        util.readDirectory(DIR2).then((res)=>{
           expect(res).to.have.lengthOf(1);
        });
    });

    it('should read input directory DIR3 and check its length',function(){
        util.readDirectory(DIR3).then((res)=>{
           expect(res).to.have.lengthOf(2);
        });
    });

     it('should read input directory DIR4 and check its length',function(){
        util.readDirectory(DIR4).then((res)=>{
           expect(res).to.have.lengthOf(5);
        });
    });

    it('should read input directory DIR5 and check its length',function(){
        util.readDirectory(DIR5).then((res)=>{
           expect(res).to.have.lengthOf(2);
        });
    });

    it('should read input directory DIR6 and check its length',function(){
        util.readDirectory(DIR6).then((res)=>{
           expect(res).to.have.lengthOf(7);
        });
    });
});

describe('statAsync()',function(){

     beforeEach(()=>{
     mock(testDir);
     });

     afterEach(mock.restore);

    it('should check if file or directory for DIR1',function(){
        var testFile = path.resolve(DIR1);
        util.statAsync(testFile).then((res)=>{
            expect(res.isFile()).to.be.false;
        });
    });

    it('should check if file or directory for DIR2',function(){
        var testFile = path.resolve(DIR2);
        util.statAsync(testFile).then((res)=>{
            expect(res.isFile()).to.be.false;
        });
    });

    it('should check if file or directory for DIR3',function(){
        var testFile = path.resolve(DIR3,'cat1.js');
        util.statAsync(testFile).then((res)=>{
            expect(res.isFile()).to.be.true;
        });
    });

    it('should check if file or directory for DIR4',function(){
        var testFile = path.resolve(DIR4,'Alpha.txt');
        util.statAsync(testFile).then((res)=>{
            expect(res.isFile()).to.be.true;
        });
    });

    it('should check if file or directory for DIR4',function(){
        var testFile = path.resolve(DIR5,'appear.jpg');
        util.statAsync(testFile).then((res)=>{
            expect(res.isFile()).to.be.true;
        });
    });

    it('should check if file or directory for DIR5',function(){
        var testFile = path.resolve(DIR6,'smile.jpg');
        util.statAsync(testFile).then((res)=>{
            expect(res.isFile()).to.be.true;
        });
    });
});