import {Component, EventEmitter, Input, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {Subject, Subscription} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss'],
})
export class BookSearchComponent implements OnInit, OnDestroy {

  @Input() forcedFilter: string;
  @Output() newSearchValue = new EventEmitter<string>();

  searchValue: string = '';
  searchSubject: Subject<string> = new Subject<string>();
  searchDebounce$: Subscription;

  constructor() {
  }

  ngOnInit(): void {
    // Add debounce before firing @Output Event to smoothen search
    this.searchDebounce$ = this.searchSubject.asObservable()
      .pipe(
        debounceTime(500),
      )
      .subscribe({
        next: searchValue => {
          this.newSearchValue.emit(searchValue);
        },
      });
  }

  ngOnDestroy(): void {
    this.searchDebounce$?.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.forcedFilter) {
      this.searchValue = '';
    }
  }

  clearSearch($event: Event) {
    // Prevent form submission
    $event.preventDefault();
    this.searchValue = '';
    this.searchSubject.next(this.searchValue);
  }

  searchInputChanged() {
    this.searchSubject.next(this.searchValue);
  }

}
