import {TestBed} from '@angular/core/testing';
import {CharacterStoreModule} from './character-store.module';

import {CharacterStoreService} from './character-store.service';

describe('CharacterStoreService', () => {
  let service: CharacterStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [CharacterStoreModule]});
    service = TestBed.inject(CharacterStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
