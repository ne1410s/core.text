const expect = require('chai').expect;
const ne14 = {
    text: require('../dist/ne14.text')
};

describe('#encoding', () => {

    it('should encode text as base64 url', () => {
        let sut = ne14.text.textToBase64Url('WOBAFGKMRNS');
        expect(sut).to.equal('???');
    });

    it('should roundtrip text and base64', () => {
        let input = 'hello world',
            sut = ne14.text.textToBase64(input),
            roundTrip = ne14.text.base64ToText(sut);
        expect(roundTrip).to.equal(input);
    });

    it('should encode buffers as base64 url', () => {
        let input = ne14.text.textToBuffer('hello world!');
        let sut = ne14.text.bufferToBase64Url(input);
        expect(sut).to.equal('???');
    });

    it('should encode objects as base64 url', () => {
        let sut = ne14.text.objectToBase64Url({ test: true, text: 'hi there' });
        expect(sut).to.equal('???');
    });
});
