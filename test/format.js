const expect = require('chai').expect;
const ne14 = {
    text: require('../dist/ne14.text')
};

describe('#format', () => {

    it('should trim a trailing character', () => {
        var sut = ne14.text.trimEnd('hello world', 'd');
        expect(sut).to.equal('hello worl');
    });

    it('should trim multiple leading characters', () => {
        var sut = ne14.text.trimStart('xyzworld', 'xyz');
        expect(sut).to.equal('world');
    });

    it('should trim special characters from either end', () => {
        var sut = ne14.text.trimBoth('!{}inner-test!{}', '!{}');
        expect(sut).to.equal('inner-test');
    });
});
