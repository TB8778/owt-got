import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {Book} from '../../models/book';
import {queryHelper} from '../helpers/query-helper';

@Injectable()
export class BookStoreService {

  apiBaseUrl = environment.apiBaseUrl;
  apiRelativeUrl = '/books';

  constructor(private httpClient: HttpClient) {
  }


  retrieveBookList({name, from, to, page}: {
    name?: string, from?: Date, to?: Date, page?: number
  } = {page: 1}): Observable<Book[]> {

    const params = {
      name: name,
      page: page,
      fromReleaseDate: from && from.toISOString().substr(0, 10),
      toReleaseDate: to && to.toISOString().substr(0, 10),
    };

    return this.httpClient.get(`${this.apiBaseUrl}${this.apiRelativeUrl}${queryHelper(params)}`)
      .pipe(
        map((bookList: any) => {
          return bookList.map(book => new Book(book));
        }),
      );

  }


  retrieveBook({id}: { id: number }): Observable<Book> {

    return this.httpClient.get(`${this.apiBaseUrl}${this.apiRelativeUrl}/${id}`)
      .pipe(
        map(book => new Book(book)),
      );

  }

}
