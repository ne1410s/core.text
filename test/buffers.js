const expect = require('chai').expect;
const ne14 = {
    text: require('../dist/ne14.text')
};

describe('#buffers', () => {

    it('should roundtrip text and buffer', () => {
        let testString = 'hello world',
            buffer = ne14.text.textToBuffer(testString),
            roundTrip = ne14.text.bufferToText(buffer);
        expect(roundTrip).to.equal(testString);
    });

});
