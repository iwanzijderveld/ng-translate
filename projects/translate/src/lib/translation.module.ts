import { NgModule } from '@angular/core';
import { TranslationService } from './services/translation.service';
import { TranslatePipe } from './pipes/translate.pipe';

@NgModule({
  declarations: [
    TranslatePipe
  ],
  providers: [
    TranslationService
  ],
  exports: [
    TranslatePipe
  ]
})
export class TranslationModule { }
