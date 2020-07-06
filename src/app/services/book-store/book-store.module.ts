import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {BookStoreService} from './book-store.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [BookStoreService],
})
export class BookStoreModule {
}
