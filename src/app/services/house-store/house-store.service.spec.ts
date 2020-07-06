import { TestBed } from '@angular/core/testing';

import { HouseStoreService } from './house-store.service';

describe('HouseStoreService', () => {
  let service: HouseStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HouseStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
