import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {BookStoreModule} from '../../services/book-store/book-store.module';
import {CharacterStoreModule} from '../../services/character-store/character-store.module';
import {BookDetailsComponent} from './book-details/book-details.component';
import {BookViewComponent} from './book-view.component';
import { BookFilterComponent } from './book-filter/book-filter.component';
import { BookSearchComponent } from './book-search/book-search.component';

@NgModule({
  declarations: [BookViewComponent, BookDetailsComponent, BookFilterComponent, BookSearchComponent],
  imports: [
    BookStoreModule,
    CharacterStoreModule,
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatCardModule,
    MatInputModule,
    MatNativeDateModule,
    MatTableModule,
  ],
  exports: [
    BookViewComponent,
  ],
})
export class BookViewModule {
}
