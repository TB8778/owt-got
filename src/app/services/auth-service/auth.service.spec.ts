import {TestBed} from '@angular/core/testing';
import {AuthServiceModule} from './auth-service.module';

import {AuthService} from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AuthServiceModule],
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
