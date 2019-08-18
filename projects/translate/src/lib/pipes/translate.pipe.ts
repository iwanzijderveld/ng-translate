import { Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from '../services/translation.service';


@Pipe({
    name: 'translate',
    pure: false
})
export class TranslatePipe implements PipeTransform {

    public constructor(private _translationService: TranslationService) { }

    transform(translate: string) {
        return this._translationService.translate(translate);
    }

}
