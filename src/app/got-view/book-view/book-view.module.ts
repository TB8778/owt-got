import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {BookStoreModule} from '../../services/book-store/book-store.module';
import {CharacterStoreModule} from '../../services/character-store/character-store.module';
import {BookDetailsComponent} from './book-details/book-details.component';
import {BookViewComponent} from './book-view.component';

@NgModule({
  declarations: [BookViewComponent, BookDetailsComponent],
  imports: [
    BookStoreModule,
    CharacterStoreModule,
    CommonModule,
    MatCardModule,
    MatTableModule,
  ],
  exports: [
    BookViewComponent,
  ],
})
export class BookViewModule {
}
