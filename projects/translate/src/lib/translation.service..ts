import { TestBed } from '@angular/core/testing';

import { TranslationService } from './services/translation.service';

describe('TranslationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TranslationService = TestBed.get(TranslationService);
    expect(service).toBeTruthy();
  });
});
