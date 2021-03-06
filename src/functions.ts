const ESCAPE_RGX = /[-\/\\^$*+?.()|[\]{}]/g;

/**
 * Removes leading character(s) from a body of text.
 * @param text The body text.
 * @param trim The leading character(s) to trim.
 * @returns The trimmed text.
 */
export function trimStart(text: string, trim: string): string {
  return text.replace(new RegExp(`^${trim.replace(ESCAPE_RGX, '\\$&')}+`), '');
}

/**
 * Removes trailing character(s) from a body of text.
 * @param text The body text.
 * @param trim The trailing character(s) to trim.
 * @returns The trimmed text.
 */
export function trimEnd(text: string, trim: string): string {
  return text.replace(new RegExp(`${trim.replace(ESCAPE_RGX, '\\$&')}+$`), '');
}

/**
 * Removes leading and trailing character(s) from a body of text.
 * @param text The body text.
 * @param trim The leading and trailing character(s) to trim.
 * @returns The trimmed text.
 */
export function trimBoth(text: string, trim: string): string {
  return trimEnd(trimStart(text, trim), trim);
}

/**
 * Converts text to an array buffer.
 * @param text The text.
 * @returns An array buffer.
 */
export function textToBuffer(text: string): ArrayBuffer {
  return Uint8Array.from(text.split(/(?=[\s\S])/u).map((c) => c.charCodeAt(0))).buffer;
}

/**
 * Converts an array buffer to the corresponding text.
 * @param buffer An array buffer.
 * @returns The corresponding text.
 */
export function bufferToText(buffer: ArrayBuffer): string {
  return String.fromCharCode.apply(null, new Uint8Array(buffer));
}

/**
 * Encodes text as base 64.
 * @param text The text.
 * @returns The encoded base 64.
 */
export function textToBase64(text: string): string {
  return Buffer.from(text, 'binary').toString('base64');
}

/**
 * Decodes base 64 to text.
 * @param base64 The base 64.
 * @returns The decoded text.
 */
export function base64ToText(base64: string): string {
  return Buffer.from(base64, 'base64').toString('binary');
}

/**
 * Encodes an array buffer as base 64.
 * @param buffer An array buffer.
 * @returns The encoded base 64.
 */
export function bufferToBase64(buffer: ArrayBuffer): string {
  return textToBase64(bufferToText(buffer));
}

/**
 * Encodes an array buffer as base 64 url.
 * @param buffer An array buffer.
 * @returns The encoded base 64 url.
 */
export function bufferToBase64Url(buffer: ArrayBuffer): string {
  return textToBase64Url(bufferToText(buffer));
}

/**
 * Encodes text as base 64 url.
 * @param text The text.
 * @returns The encoded base 64 url.
 */
export function textToBase64Url(text: string): string {
  return textToBase64(text).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}

/**
 * Encodes an object as base 64 url, from its JSON.
 * @param object The object.
 * @returns The encoded base 64 url.
 */
export function objectToBase64Url(object: any): string {
  return textToBase64Url(JSON.stringify(object));
}
