import { Cipher } from "./contracts/cipher";
import { PartialMessageEncoder } from "./contracts/implemented/partialMessageEncoder";
import { Language } from "./contracts/language";
import { MessageEncoder } from "./contracts/messageEncoder";
import { totalProccessedChars } from "./types";

export class LanguageMessageEncoder<TLang extends Language, TCipher extends Cipher<TLang>> extends PartialMessageEncoder implements MessageEncoder {
    private encodedCharsCount = 0;
    private decodedCharsCount = 0;

    constructor(lang: TLang, cipher: TCipher) {
        super(lang, cipher);
    }

    public encodeMessage(secretMessage: unknown) {
        if(typeof secretMessage !== 'string' || secretMessage.length === 0) {
            return "No message.";
        }

        const strippedMsg = this.stripForbiddenSymbols(secretMessage);
        const isCompatible = this.language.isCompatibleToCharset(strippedMsg);

        if(!isCompatible) {
            return "Message not compatible.";
        }

        const encodedMessage = this.cipher.encipher(strippedMsg);
        this.encodedCharsCount += encodedMessage.length;
        return encodedMessage;
    }

    public decodeMessage(secretMessage: unknown): string {
        if(typeof secretMessage !== 'string' || secretMessage.length === 0) {
            return "No message.";
        }

        const isCompatible = this.language.isCompatibleToCharset(secretMessage);

        if(!isCompatible) {
            return "Message not compatible.";
        }

        const decodedMessage = this.cipher.decipher(secretMessage);
        this.decodedCharsCount += decodedMessage.length;
        return decodedMessage;
    }

    public totalProcessedCharacters(type: totalProccessedChars): string {
        switch(type) {
            case "Encoded":
                return `Total processed characters count: ${this.encodedCharsCount}`
            case "Decoded":
                return `Total processed characters count: ${this.decodedCharsCount}`
            case "Both":
                const sum = this.decodedCharsCount + this.encodedCharsCount;
                return `Total processed characters count: ${sum}`
        }
    }

    protected override stripForbiddenSymbols(message: string) {
          let forbiddenSymbols = PartialMessageEncoder.forbiddenSymbols;
          forbiddenSymbols.forEach(x => message = message.replaceAll(x, ''));
          return message;
     }
}
