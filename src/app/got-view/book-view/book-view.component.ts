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
  forcedFilter: string;

  constructor(
    private bookStore: BookStoreService,
  ) {
  }

  ngOnInit(): void {
    this._retrieveBookList();
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

  filterLocalList(searchedStr: string) {
    this.dataSource.filter = searchedStr;
  }

  // Search the global field in any property of all books from the current page
  // This has to be called whenever the datasource is reinstancied
  _addFilterPredicate(): void {
    this.dataSource.filterPredicate = (book: Book, filter: string) => {

      if (!filter) {
        return true;
      }

      // Make search case insensitive
      const _filter = filter.toLowerCase();

      return book.name.toLowerCase().includes(_filter)
        || book.country.toLowerCase().includes(_filter)
        || book.released.toLocaleDateString().includes(_filter)
        || book.isbn.toLowerCase().includes(_filter)
        || book.mediaType.toLowerCase().includes(_filter)
        || book.numberOfPages.toString().includes(_filter)
        || book.publisher.toLowerCase().includes(_filter)
        || book.authors.some(author => author.toLowerCase().includes(_filter));
    };
  }

  _retrieveBookList(): void {
    // Since the global search is bound to the current displayed page, we need to reset whenever the page changes
    this.dataSource.filter = '';
    // Hack to trigger the search changes to make it reset. Else we could use a service to coordinate filtering and pagination.
    this.forcedFilter = Date.now().toString();

    this.bookListSub = this.bookStore.retrieveBookList({
      ...this.currentFilter,
      page: this.currentPage,
    })
      .subscribe(bookList => {
        this.dataSource = new MatTableDataSource<Book>(bookList);
        this._addFilterPredicate();
      });
  }
}
