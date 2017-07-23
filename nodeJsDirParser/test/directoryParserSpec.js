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

        var spyCallback = sinon.spy();
        directoryParser.parseDirectory(spyCallback);
        expect(spyCallback).to.have.been.called;
        spyCallback.restore;
    });
});