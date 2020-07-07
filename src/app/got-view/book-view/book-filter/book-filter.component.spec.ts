import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {BookViewModule} from '../book-view.module';

import {BookFilterComponent} from './book-filter.component';

describe('BookFilterComponent', () => {
  let component: BookFilterComponent;
  let fixture: ComponentFixture<BookFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BookViewModule, NoopAnimationsModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
