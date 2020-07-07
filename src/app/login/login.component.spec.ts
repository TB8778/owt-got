import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from '../app-routing.module';

import {LoginComponent} from './login.component';
import {LoginModule} from './login.module';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LoginModule, AppRoutingModule, NoopAnimationsModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
