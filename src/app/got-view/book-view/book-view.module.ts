import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {BookStoreModule} from '../../services/book-store/book-store.module';
import {BookViewComponent} from './book-view.component';

@NgModule({
  declarations: [BookViewComponent],
  imports: [
    BookStoreModule,
    CommonModule,
    MatTableModule,
  ],
  exports: [
    BookViewComponent,
  ],
})
export class BookViewModule {
}
