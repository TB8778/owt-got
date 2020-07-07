import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {BookViewComponent} from './book-view.component';

@NgModule({
  declarations: [BookViewComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    BookViewComponent,
  ],
})
export class BookViewModule {
}
