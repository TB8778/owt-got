import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookStoreService} from './book-store.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [BookStoreService]
})
export class BookStoreModule { }
