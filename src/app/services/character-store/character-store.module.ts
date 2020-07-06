import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {CharacterStoreService} from './character-store.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [CharacterStoreService],
})
export class CharacterStoreModule {
}
