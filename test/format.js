const expect = require('chai').expect;
const ne_text = require('../dist/ne14_text.umd.min');

describe('#format', () => {

    it('should trim a trailing character', () => {
        var sut = ne_text.trimEnd('hello world', 'd');
        expect(sut).to.equal('hello worl');
    });

    it('should trim multiple leading characters', () => {
        var sut = ne_text.trimStart('xyzworld', 'xyz');
        expect(sut).to.equal('world');
    });

    it('should trim special characters from either end', () => {
        var sut = ne_text.trimBoth('!{}inner-test!{}', '!{}');
        expect(sut).to.equal('inner-test');
    });
});
