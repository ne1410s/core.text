const expect = require('chai').expect;
const ne14 = require('../dist/index');

describe('#buffers', () => {

    it('should roundtrip text and buffer', () => {
        let testString = 'hello world',
            buffer = ne14.Text.textToBuffer(testString),
            roundTrip = ne14.Text.bufferToText(buffer);
        expect(roundTrip).to.equal(testString);
    });

});
