var DirectoryParser = require('../app/directoryParser'); 

describe('DirectoryParser',function(){
    it('constructor should have two properties: fileNames and directoryNames',function(){
        var directoryParser = new DirectoryParser();
        expect(directoryParser).to.have.property('fileNames');
        expect(directoryParser).to.have.property('directoryNames');
    });
});

describe('parseDirectory()',function(){
    it('should return json result with fileNames and directories',function(){
        var directoryParser = new DirectoryParser();
        directoryParser.directoryNames = ['FOO','BOO'];
        directoryParser.fileNames = ['f1.txt','f2.txt','aa.jpg'];

        var res = directoryParser.parseDirectory();
        expect(res.fileNames).to.have.lengthOf(3);
        expect(res.directoryNames).to.have.lengthOf(2);

        expect((res.fileNames[0]).indexOf(directoryParser.fileNames[0])>-1).to.be.true;
        expect((res.fileNames[1]).indexOf(directoryParser.fileNames[1])>-1).to.be.true;
        expect((res.directoryNames[0]).indexOf(directoryParser.directoryNames[0])>-1).to.be.true;
        expect((res.directoryNames[1]).indexOf(directoryParser.directoryNames[1])>-1).to.be.true;
    });
});