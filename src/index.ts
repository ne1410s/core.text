
const ESCAPE_RGX = /[-\/\\^$*+?.()|[\]{}]/g;

export default abstract class Text {



    public static trimStart(text: string, trim: string): string {

        return text.replace(new RegExp(`^${trim.replace(ESCAPE_RGX, '\\$&')}+`), '');
    }

    public static trimEnd(text: string, trim: string): string {

        return text.replace(new RegExp(`${trim.replace(ESCAPE_RGX, '\\$&')}+$`), '');
    }

    public static trimBoth(text: string, trim: string): string {

        return Text.trimEnd(Text.trimStart(text, trim), trim);
    }



    public static textToBuffer(text: string): ArrayBuffer {

        return Uint8Array.from(text.split(/(?=[\s\S])/u)
            .map(c => c.charCodeAt(0))).buffer;
    }

    public static bufferToText(buffer: ArrayBuffer): string {

        return String.fromCharCode.apply(null, new Uint8Array(buffer));
    }



    public static textToBase64(text: string): string {

        return Buffer.from(text).toString('base64');
    }

    public static base64ToText(base64: string): string {

        return Buffer.from(base64, 'base64').toString();
    }



    public static textToBase64Url(text: string): string {

        return Text.textToBase64(text)
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=+$/g, '');
    }

    public static bufferToBase64Url(buffer: ArrayBuffer): string {

        return Text.textToBase64Url(Text.bufferToText(buffer));
    }

    public static objectToBase64Url(object: any): string {

        return Text.textToBase64Url(JSON.stringify(object));
    }

}