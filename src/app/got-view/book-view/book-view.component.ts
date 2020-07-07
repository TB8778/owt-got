import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Subscription} from 'rxjs';
import {Book} from '../../models/book';
import {BookStoreService} from '../../services/book-store/book-store.service';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.scss'],
})
export class BookViewComponent implements OnInit, OnDestroy {

  readonly firstPage = 1; // The api paging starts at 1
  readonly lastPage = 2; // We could parse api 'link' header to retrieve this info
  readonly displayedColumns: string[] = ['name', 'released', 'authors', 'publisher', 'isbn', 'numberOfPages'];

  dataSource = new MatTableDataSource<Book>([]);
  currentPage = this.firstPage;

  bookListSub: Subscription;
  bookToDisplay: Book;

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

  updateList({from, name, to}: { name?: string; from?: Date; to?: Date }) {
    this.currentPage = 1;
    this.bookListSub = this.bookStore.retrieveBookList({
      page: 1,
      name,
      from,
      to,
    })
      .subscribe(bookList => {
        this.dataSource = new MatTableDataSource<Book>(bookList);
      });
  }

  _retrieveBookList() {
    this.bookListSub = this.bookStore.retrieveBookList({page: this.currentPage})
      .subscribe(bookList => {
        this.dataSource = new MatTableDataSource<Book>(bookList);
      });
  }

}
