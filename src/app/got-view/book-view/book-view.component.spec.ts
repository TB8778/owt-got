import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {BookViewComponent} from './book-view.component';
import {BookViewModule} from './book-view.module';

describe('BookViewComponent', () => {
  let component: BookViewComponent;
  let fixture: ComponentFixture<BookViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BookViewModule, NoopAnimationsModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
