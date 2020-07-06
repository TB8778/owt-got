import {TestBed} from '@angular/core/testing';
import {BookStoreModule} from './book-store.module';

import {BookStoreService} from './book-store.service';

describe('BookStoreService', () => {
  let service: BookStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [BookStoreModule]});
    service = TestBed.inject(BookStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
