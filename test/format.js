const expect = require('chai').expect;
const ne14 = {
    text: require('../dist/ne14.text')
};

describe('#format', () => {

    it('should trim a trailing character', () => {
        var sut = ne14.text.trimEnd('hello world', 'd');
        expect(sut).to.equal('hello worl');
    });

    it('should trim a special trailing character', () => {
        var sut = ne14.text.trimEnd('hello wor$$$', '$');
        expect(sut).to.equal('hello wor');
    });

    it('should trim multiple trailing characters', () => {
        var sut = ne14.text.trimEnd('hello worldly world', 'world');
        expect(sut).to.equal('hello worldly ');
    });
});
