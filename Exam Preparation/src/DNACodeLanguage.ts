import { Language } from "./contracts/language";
import { DNAValidChars } from "./types";

export class DNACodeLanguage implements Language {
    private _charset: Set<DNAValidChars> = new Set(['A', 'C', 'G', 'T']);

    get charset() {
        return this._charset;
    }

    isCompatibleToCharset(message: string): boolean {
        let messageArray = message.split('');
        const allowedChars: string[] = Array.from(this.charset.values());
        const isCompatible = messageArray.every(char => allowedChars.includes(char));
        return isCompatible;
    }
}