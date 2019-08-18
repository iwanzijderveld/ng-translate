import { ITranslation } from '../interfaces/translation.interface';

export class Translation implements ITranslation {
    file: string;
    language: string;

    public constructor(file: string, language: string) {
        this.file = file;
        this.language = language;
    }
}
