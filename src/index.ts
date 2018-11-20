
export default abstract class Text {
    
    public static textToBuffer(text: string): ArrayBuffer {

        let buffer = new ArrayBuffer(text.length),
            bufferView = new Uint8Array(buffer);

        for (let i = 0; i < text.length; i++) {
            bufferView[i] = text[i].charCodeAt(0);
        }

        return buffer;
    }

    public static bufferToText(buffer: ArrayBuffer): string {

        return new Uint8Array(buffer)
            .reduce((acc, cur) => acc + String.fromCharCode(cur), '');
    }

}