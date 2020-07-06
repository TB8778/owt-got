import {TestBed} from '@angular/core/testing';
import {HouseStoreModule} from './house-store.module';

import {HouseStoreService} from './house-store.service';

describe('HouseStoreService', () => {
  let service: HouseStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HouseStoreModule]});
    service = TestBed.inject(HouseStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
