import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GotViewComponent } from './got-view.component';

describe('GotViewComponent', () => {
  let component: GotViewComponent;
  let fixture: ComponentFixture<GotViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GotViewComponent ]
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
