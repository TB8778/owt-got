import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Subscription} from 'rxjs';
import {Book} from '../../models/book';
import {BookStoreService} from '../../services/book-store/book-store.service';
import {BookFilter} from './book-filter/book-filter';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.scss'],
})
export class BookViewComponent implements OnInit, OnDestroy {

  readonly firstPage = 1; // The api paging starts at 1
  readonly lastPage = 2; // We could parse api 'link' header to retrieve this info
  readonly displayedColumns: string[] = ['name', 'released', 'authors', 'publisher', 'isbn', 'numberOfPages'];

  bookListSub: Subscription;
  bookToDisplay: Book;
  currentFilter: BookFilter = {};
  currentPage = this.firstPage;
  dataSource = new MatTableDataSource<Book>([]);

  constructor(
    private bookStore: BookStoreService,
  ) {
  }

  ngOnInit(): void {
    this.bookListSub = this.bookStore.retrieveBookList()
      .subscribe(bookList => {
        this.dataSource = new MatTableDataSource<Book>(bookList);
      });
  }

  ngOnDestroy(): void {
    this.bookListSub?.unsubscribe();
  }

  displayPrevious() {
    this.currentPage--;
    this._retrieveBookList();
  }

  displayNext() {
    this.currentPage++;
    this._retrieveBookList();
  }

  displayDetails(row: Book) {
    this.bookToDisplay = row;
  }

  updateList(bookFilter: BookFilter) {
    this.currentPage = 1;
    this.currentFilter = bookFilter;
    this._retrieveBookList();
  }

  _retrieveBookList() {
    this.bookListSub = this.bookStore.retrieveBookList({
      ...this.currentFilter,
      page: this.currentPage,
    })
      .subscribe(bookList => {
        this.dataSource = new MatTableDataSource<Book>(bookList);
      });
  }

}
