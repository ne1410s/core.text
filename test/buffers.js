const expect = require('chai').expect;
const ne_text = require('../dist/ne14_text.umd.min');

describe('#buffers', () => {

    it('should roundtrip text and buffer', () => {
        let testString = 'hello world',
            buffer = ne_text.textToBuffer(testString),
            roundTrip = ne_text.bufferToText(buffer);
        expect(roundTrip).to.equal(testString);
    });

});
