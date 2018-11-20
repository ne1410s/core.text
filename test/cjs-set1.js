const expect = require('chai').expect;
const ne14 = {
    Text: require('../dist/ne14.text')
};

describe('#thingamy', () => {

    it('1.1.1', () => {

        let testString = 'hello world',
            buffer = ne14.Text.textToBuffer(testString),
            roundTrip = ne14.Text.bufferToText(buffer);

        expect(roundTrip).to.equal(testString);
    });

});