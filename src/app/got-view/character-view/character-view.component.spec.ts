import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CharacterViewComponent} from './character-view.component';
import {CharacterViewModule} from './character-view.module';

describe('CharacterViewComponent', () => {
  let component: CharacterViewComponent;
  let fixture: ComponentFixture<CharacterViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CharacterViewModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
