import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Book} from '../../models/book';
import {BookStoreService} from '../../services/book-store/book-store.service';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.scss'],
})
export class BookViewComponent implements OnInit {

  displayedColumns: string[] = ['name', 'released', 'authors', 'publisher', 'isbn', 'numberOfPages'];
  dataSource: Book[] = [];

  bookListSub: Subscription;

  constructor(
    private bookStore: BookStoreService,
  ) {
  }

  ngOnInit(): void {
    this.bookListSub = this.bookStore.retrieveBookList()
      .subscribe(bookList => {
        this.dataSource = bookList;
      });
  }

  ngOnDestroy(): void {
    this.bookListSub?.unsubscribe();
  }

}
