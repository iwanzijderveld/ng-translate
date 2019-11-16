import { ITranslation } from '../interfaces/translation.interface';

export class Translation implements ITranslation {
    file: string;
    language: string;

    constructor(file: string, language: string) {
        this.file = file;
        this.language = language;
    }
}
