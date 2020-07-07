import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from '../app-routing.module';

import {GotViewComponent} from './got-view.component';
import {GotViewModule} from './got-view.module';

describe('GotViewComponent', () => {
  let component: GotViewComponent;
  let fixture: ComponentFixture<GotViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GotViewModule,
        AppRoutingModule, NoopAnimationsModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GotViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
