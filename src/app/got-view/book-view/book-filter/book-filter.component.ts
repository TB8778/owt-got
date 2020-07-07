import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-book-filter',
  templateUrl: './book-filter.component.html',
  styleUrls: ['./book-filter.component.scss'],
})
export class BookFilterComponent implements OnInit {

  @Output() updateSearch = new EventEmitter<{ name?: string, from?: Date, to?: Date }>();

  searchedName: string;
  searchedDateStart: Date;
  searchedDateEnd: Date;

  constructor() {
  }

  ngOnInit(): void {
  }

  resetFilters($event) {
    // This prevents the form to trigger automatically, we prefer to handle output manually
    $event.preventDefault();
    this.searchedName = undefined;
    this.searchedDateStart = undefined;
    this.searchedDateEnd = undefined;
    this.updateSearch.emit({});
  }

  search() {
    this.updateSearch.emit({
      name: this.searchedName,
      from: this.searchedDateStart,
      to: this.searchedDateEnd,
    });
  }

}
