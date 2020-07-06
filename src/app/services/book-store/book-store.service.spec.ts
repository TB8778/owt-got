import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';
import {mockedBookList} from '../../fixtures/book-list';
import {BookStoreModule} from './book-store.module';

import {BookStoreService} from './book-store.service';

describe('BookStoreService', () => {
  let service: BookStoreService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [BookStoreModule, HttpClientTestingModule]});
    service = TestBed.inject(BookStoreService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve a book list without filter', () => {
    let bookList = [];

    service.retrieveBookList().subscribe(_bookList => {
      bookList = _bookList;
    });

    const req = httpTestingController.expectOne('https://www.anapioficeandfire.com/api/books');

    req.flush(mockedBookList);

    expect(bookList.length).toEqual(2);
    expect(bookList[0].name).toEqual('A Game of Thrones');

  });

  it('should retrieve a book list with a filter', () => {
    let bookList = [];

    service.retrieveBookList({from: new Date(2015, 5)}).subscribe(_bookList => {
      bookList = _bookList;
    });

    const req = httpTestingController.expectOne('https://www.anapioficeandfire.com/api/books?fromReleaseDate=2015-05-31');

    req.flush([mockedBookList[1]]);

    expect(bookList.length).toEqual(1);
    expect(bookList[0].name).toEqual('A Knight of the Seven Kingdoms');

  });

  it('should retrieve a book', () => {
    let book;

    service.retrieveBook({id: 2}).subscribe(_book => {
      book = _book;
    });

    const req = httpTestingController.expectOne('https://www.anapioficeandfire.com/api/books/2');

    req.flush(mockedBookList[1]);

    expect(book.isbn).toEqual('978-0345533487');

  });

});
