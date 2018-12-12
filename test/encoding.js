const expect = require('chai').expect;
const ne14 = {
    text: require('../dist/index')
};

describe('#encoding', () => {

    it('should roundtrip text and base64', () => {
        let input = 'hello world',
            sut = ne14.text.textToBase64(input),
            roundTrip = ne14.text.base64ToText(sut);
        expect(roundTrip).to.equal(input);
    });

    it('should encode text as base64 url', () => {
        let sut = ne14.text.textToBase64Url('wobafgkmrns');
        expect(sut).to.equal('d29iYWZna21ybnM');
    });

    it('should encode buffers as base64 url', () => {
        let input = ne14.text.textToBuffer('hello world!');
        let sut = ne14.text.bufferToBase64Url(input);
        expect(sut).to.equal('aGVsbG8gd29ybGQh');
    });

    it('should encode objects as base64 url', () => {
        let sut = ne14.text.objectToBase64Url({ test: 45, isok: true });
        expect(sut).to.equal('eyJ0ZXN0Ijo0NSwiaXNvayI6dHJ1ZX0');
    });

    it('should encode declarative buffers as base64 url', () => {
        var uint8 = new Uint8Array([82,15,160,120,239,239,198,209,150,148,189,219,72,72,204,134,3,88,35,195,42,232,58,99,8,160,206,122,98,51,149,109,231,5,87,45,137,28,253,15,120,131,255,118,166,76,101,20,248,62,169,80,137,114,107,96,51,48,179,133,2,168,15,119,5,214,43,106,20,14,149,132,171,39,4,206,37,70,86,161,121,127,238,182,145,89,239,75,132,53,138,121,33,252,164,157,254,49,113,217,234,110,47,193,1,181,24,8,209,236,179,202,109,17,112,180,174,160,104,73,210,209,33,65,48,41,176,15,81,178,221,221,33,41,117,85,201,40,179,136,80,218,206,178,109,86,134,162,84,235,14,135,76,61,199,164,241,47,133,202,139,104,157,213,65,121,73,13,186,76,47,58,30,185,30,151,103,19,81,8,102,60,57,199,224,107,135,127,225,147,227,112,59,177,62,27,199,168,163,56,241,47,47,231,100,79,220,80,57,195,237,123,213,213,113,215,54,43,60,71,255,3,136,165,160,167,200,53,179,102,102,185,55,112,63,17,164,81,187,150,4,216,157,94,178,16,215,8,19,153,26,236,46,41,134,222]);
        let b64u = ne14.text.bufferToBase64Url(uint8.buffer);
        expect(b64u).to.equal('Ug-geO_vxtGWlL3bSEjMhgNYI8Mq6DpjCKDOemIzlW3nBVctiRz9D3iD_3amTGUU-D6pUIlya2AzMLOFAqgPdwXWK2oUDpWEqycEziVGVqF5f-62kVnvS4Q1inkh_KSd_jFx2epuL8EBtRgI0eyzym0RcLSuoGhJ0tEhQTApsA9Rst3dISl1Vckos4hQ2s6ybVaGolTrDodMPcek8S-FyotondVBeUkNukwvOh65HpdnE1EIZjw5x-Brh3_hk-NwO7E-G8eoozjxLy_nZE_cUDnD7XvV1XHXNis8R_8DiKWgp8g1s2ZmuTdwPxGkUbuWBNidXrIQ1wgTmRrsLimG3g');
    });
});
