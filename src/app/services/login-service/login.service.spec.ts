import {TestBed} from '@angular/core/testing';
import {LoginServiceModule} from './login-service.module';

import {LoginService} from './login.service';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [LoginServiceModule]});
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
