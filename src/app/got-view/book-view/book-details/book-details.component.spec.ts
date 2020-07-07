import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {BookViewModule} from '../book-view.module';

import {BookDetailsComponent} from './book-details.component';

describe('BookDetailsComponent', () => {
  let component: BookDetailsComponent;
  let fixture: ComponentFixture<BookDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BookViewModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
