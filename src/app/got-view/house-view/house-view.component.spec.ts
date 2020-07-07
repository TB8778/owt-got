import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HouseViewComponent} from './house-view.component';
import {HouseViewModule} from './house-view.module';

describe('HouseViewComponent', () => {
  let component: HouseViewComponent;
  let fixture: ComponentFixture<HouseViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HouseViewModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
